// validate-links.js
// Script to validate and deduplicate links in links.json
const fs = require('fs');
const https = require('https');
const { URL } = require('url');

const UNSTABLE_DOMAINS = [
  'jules.google.com',
  'labs.google/flow',
  'gemini.google.com/gem',
];

function isUnstable(url) {
  return UNSTABLE_DOMAINS.some(domain => url.includes(domain));
}

function checkReachability(url) {
  return new Promise(resolve => {
    try {
      const { hostname } = new URL(url);
      const req = https.request(url, { method: 'HEAD', timeout: 5000 }, res => {
        resolve(res.statusCode < 400);
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
      req.end();
    } catch {
      resolve(false);
    }
  });
}

async function validateLinks() {
  const data = JSON.parse(fs.readFileSync('links.json', 'utf8'));
  const allTitles = new Map();
  const allUrls = new Map();
  let hasError = false;

  for (const category of data.categories) {
    for (const link of category.links) {
      // Unstable URL check
      if (isUnstable(link.url)) {
        console.warn(`Warning: Unstable URL detected: ${link.url}`);
      }
      // Duplicate title check
      if (allTitles.has(link.title)) {
        console.error(`Duplicate title found: ${link.title} in categories "${allTitles.get(link.title)}" and "${category.name}"`);
        hasError = true;
      } else {
        allTitles.set(link.title, category.name);
      }
      // Duplicate URL check
      if (allUrls.has(link.url)) {
        console.error(`Duplicate URL found: ${link.url} in titles "${allUrls.get(link.url)}" and "${link.title}"`);
        hasError = true;
      } else {
        allUrls.set(link.url, link.title);
      }
    }
  }

  // Reachability check (async)
  for (const [url, title] of allUrls.entries()) {
    const reachable = await checkReachability(url);
    if (!reachable) {
      console.warn(`Warning: URL not reachable: ${url} (title: ${title})`);
    }
  }

  if (hasError) {
    process.exit(1);
  } else {
    console.log('Validation complete. No critical errors found.');
  }
}

if (require.main === module) {
  validateLinks();
}
