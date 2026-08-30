const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let currentSearchIndex = -1;

// Combine links from CONFIG and the extracted history
const getSearchLinks = () => {
    let links = [];
    
    // Add links from lists
    [...CONFIG.firstlistsContainer, ...CONFIG.secondListsContainer].forEach(container => {
        links = [...links, ...container.links];
    });
    
    // Add top buttons
    [...CONFIG.firstButtonsContainer, ...CONFIG.secondButtonsContainer].forEach(btn => 
        links.push({ name: btn.name, link: btn.link })
    );

    // Add ALL_LINKS from history
    if (typeof ALL_LINKS !== 'undefined') {
        links = [...links, ...ALL_LINKS];
    }

    // Remove duplicates and empty links
    const uniqueLinks = [];
    const seen = new Set();
    
    links.forEach(l => {
        if (l.name && l.link && !seen.has(l.link)) {
            uniqueLinks.push(l);
            seen.add(l.link);
        }
    });

    return uniqueLinks;
};

const allSearchableLinks = getSearchLinks();

const updateSearchFocus = () => {
    const items = searchResults.querySelectorAll('.searchResultItem');
    items.forEach((item, index) => {
        if (index === currentSearchIndex) {
            item.classList.add('focused');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('focused');
        }
    });
};

const performSearch = (query) => {
    currentSearchIndex = -1;
    if (!query) {
        searchResults.style.display = 'none';
        return;
    }

    const filtered = allSearchableLinks.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.link.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10);

    if (filtered.length > 0) {
        searchResults.innerHTML = filtered.map(item => `
            <a href="${item.link}" target="${CONFIG.openInNewTab ? '_blank' : ''}" class="searchResultItem">
                <strong>${item.name}</strong><br>
                <small style="opacity: 0.6; font-size: 0.8em;">${item.link}</small>
            </a>
        `).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
};

searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.searchResultItem');
    
    if (e.key === 'ArrowDown' || (e.key === 'j' && e.ctrlKey)) {
        e.preventDefault();
        currentSearchIndex = Math.min(currentSearchIndex + 1, items.length - 1);
        updateSearchFocus();
    } else if (e.key === 'ArrowUp' || (e.key === 'k' && e.ctrlKey)) {
        e.preventDefault();
        currentSearchIndex = Math.max(currentSearchIndex - 1, 0);
        updateSearchFocus();
    } else if (e.key === 'Enter') {
        if (currentSearchIndex >= 0 && items[currentSearchIndex]) {
            e.preventDefault();
            items[currentSearchIndex].click();
        } else if (items.length > 0) {
            // Confirm first result if none focused
            items[0].click();
        }
    } else if (e.key === 'Escape') {
        searchResults.style.display = 'none';
        searchInput.blur();
    }
});

// Close results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

// Keyboard shortcut '/' to focus search
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.value = '';
        searchInput.focus();
    }
});
