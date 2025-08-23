async function loadLinks() {
    try {
        const response = await fetch('links.json');
        const data = await response.json();
        renderLinks(data.categories);
    } catch (error) {
        console.error('Error loading links:', error);
        document.getElementById('main-content').innerHTML = '<p>Error loading links</p>';
    }
}

function renderLinks(categories) {
    const mainContent = document.getElementById('main-content');
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        
        categoryDiv.innerHTML = `
            <div class="category-header">
                <span class="category-icon">${category.icon}</span>
                <h2 class="category-title">${category.name}</h2>
            </div>
            <div class="links-grid">
                ${category.links.map(link => `
                    <a href="${link.url}" target="_blank" class="link-card">
                        <div class="link-title">${link.title}</div>
                        <div class="link-description">${link.description}</div>
                        <div class="link-url">${link.url}</div>
                    </a>
                `).join('')}
            </div>
        `;
        
        mainContent.appendChild(categoryDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadLinks);