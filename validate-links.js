// validate-links.js
// Script to validate and deduplicate links in links.json
const fs = require("fs");
const https = require("https");
const { URL } = require("url");

const UNSTABLE_DOMAINS = [
  "jules.google.com",
  "labs.google/flow",
  "gemini.google.com/gem",
];

function isUnstable(url) {
  return UNSTABLE_DOMAINS.some((domain) => url.includes(domain));
}

function checkReachability(url) {
  return new Promise((resolve) => {
    try {
      const { hostname } = new URL(url);
      const req = https.request(
        url,
        { method: "HEAD", timeout: 5000 },
        (res) => {
          resolve(res.statusCode < 400);
        }
      );
      req.on("error", () => resolve(false));
      req.on("timeout", () => {
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
  const data = JSON.parse(fs.readFileSync("links.json", "utf8"));
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
        console.error(
          `Duplicate title found: ${link.title} in categories "${allTitles.get(
            link.title
          )}" and "${category.name}"`
        );
        hasError = true;
      } else {
        allTitles.set(link.title, category.name);
      }
      // Duplicate URL check
      if (allUrls.has(link.url)) {
        console.error(
          `Duplicate URL found: ${link.url} in titles "${allUrls.get(
            link.url
          )}" and "${link.title}"`
        );
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
    console.log("Validation complete. No critical errors found.");
  }
}

// Check for duplicates only mode
function checkDuplicatesOnly() {
  console.log("🔍 Checking for duplicate links only...\n");

  const data = JSON.parse(fs.readFileSync("links.json", "utf8"));
  const allTitles = new Map();
  const allUrls = new Map();
  let hasError = false;
  let totalLinks = 0;

  for (const category of data.categories) {
    if (!category.name || !category.links || !Array.isArray(category.links)) {
      continue;
    }

    totalLinks += category.links.length;

    for (const link of category.links) {
      if (!link.title || !link.url) continue;

      // Duplicate title check
      if (allTitles.has(link.title)) {
        console.error(`❌ DUPLICATE TITLE: "${link.title}"`);
        console.error(`   First found in: "${allTitles.get(link.title)}"`);
        console.error(`   Duplicate in: "${category.name}"`);
        hasError = true;
      } else {
        allTitles.set(link.title, category.name);
      }

      // Duplicate URL check
      if (allUrls.has(link.url)) {
        console.error(`❌ DUPLICATE URL: ${link.url}`);
        console.error(`   First found in: "${allUrls.get(link.url)}"`);
        console.error(`   Duplicate in: "${link.title}"`);
        hasError = true;
      } else {
        allUrls.set(link.url, link.title);
      }
    }
  }

  console.log(
    `\n📊 Checked ${totalLinks} links across ${data.categories.length} categories`
  );

  if (hasError) {
    console.log("❌ DUPLICATES FOUND!");
    process.exit(1);
  } else {
    console.log("✅ No duplicates found!");
  }
}

if (require.main === module) {
  // Check command line arguments
  const args = process.argv.slice(2);
  if (args.includes("--duplicates-only")) {
    checkDuplicatesOnly();
  } else {
    validateLinks();
  }
}
