// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const categoryFilter = document.getElementById('categoryFilter');
const materialsGrid = document.getElementById('materialsGrid');
const emptyState = document.getElementById('emptyState');
const loadingState = document.getElementById('loadingState');
const resultsCount = document.getElementById('resultsCount');

// State
let currentClassFilter = 'all';
let currentCategoryFilter = 'all';
let currentMediumFilter = 'all';
let searchQuery = '';
let categories = [];
let mediums = [];

// Initialize the app
function init() {
    showLoading(true);
    
    // Apply URL query parameters first (sets currentClassFilter)
    applyUrlParams();
    
    // Extract unique categories from data (filtered by class if specified)
    categories = extractCategories(studyMaterials, currentClassFilter);
    mediums = extractMediums(studyMaterials, currentClassFilter);
    
    // Populate category filter pills
    populateCategoryFilters();
    
    // Populate medium filter pills
    populateMediumFilters();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial render
    setTimeout(() => {
        showLoading(false);
        renderMaterials();
    }, 300);
}

// Parse URL query parameters and apply filters
function applyUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Apply theme from query parameter
    const themeParam = urlParams.get('theme');
    if (themeParam === 'dark' || themeParam === 'light') {
        document.body.setAttribute('data-theme', themeParam);
    }
    
    // Apply class filter from query parameter (no UI update needed)
    const classParam = urlParams.get('class');
    if (classParam && (classParam === '10' || classParam === '12')) {
        currentClassFilter = classParam;
    }
}

// Extract unique categories from materials (only categories with at least 1 resource)
// Optionally filter by class if classFilter is provided
function extractCategories(materials, classFilter = 'all') {
    const categoryIds = new Set();
    materials.forEach(material => {
        // Only include categories from materials that match the class filter
        if (classFilter === 'all' || material.class === parseInt(classFilter)) {
            categoryIds.add(material.categoryId);
        }
    });
    
    // Return only categories that exist in materials
    return Array.from(categoryIds)
        .filter(id => CATEGORIES[id]) // Ensure category exists in predefined list
        .map(id => ({ id, name: CATEGORIES[id] }));
}

// Extract unique mediums from materials
function extractMediums(materials, classFilter = 'all') {
    const mediumSet = new Set();
    materials.forEach(material => {
        if (classFilter === 'all' || material.class === parseInt(classFilter)) {
            if (material.medium) {
                mediumSet.add(material.medium);
            }
        }
    });
    return Array.from(mediumSet).sort();
}

// Populate category filter pills
function populateCategoryFilters() {
    // Hide entire category filter if there's only 1 category (filtering is redundant)
    if (categories.length <= 1) {
        categoryFilter.parentElement.style.display = 'none';
        return;
    }
    
    categories.forEach(category => {
        const pill = document.createElement('button');
        pill.className = 'pill';
        pill.setAttribute('data-category', category.id);
        pill.textContent = category.name;
        categoryFilter.appendChild(pill);
    });
}

// Populate medium filter pills
function populateMediumFilters() {
    const mediumFilter = document.getElementById('mediumFilter');
    if (!mediumFilter) return;
    
    // Hide if no mediums exist
    if (mediums.length === 0) {
        mediumFilter.parentElement.style.display = 'none';
        return;
    }
    
    mediumFilter.parentElement.style.display = '';
    
    mediums.forEach(medium => {
        const pill = document.createElement('button');
        pill.className = 'pill';
        pill.setAttribute('data-medium', medium);
        pill.textContent = `${medium} medium`;
        mediumFilter.appendChild(pill);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', debounce(handleSearch, 200));
    
    // Clear search button
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Category filter pills
    categoryFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('pill')) {
            handleCategoryFilter(e.target);
        }
    });
    
    // Medium filter pills
    const mediumFilter = document.getElementById('mediumFilter');
    if (mediumFilter) {
        mediumFilter.addEventListener('click', (e) => {
            if (e.target.classList.contains('pill')) {
                handleMediumFilter(e.target);
            }
        });
    }
}

// Handle search input
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    updateClearButton();
    renderMaterials();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    searchQuery = '';
    updateClearButton();
    renderMaterials();
}

// Update clear button visibility
function updateClearButton() {
    if (searchQuery.length > 0) {
        clearSearchBtn.classList.add('visible');
    } else {
        clearSearchBtn.classList.remove('visible');
    }
}



// Handle category filter
function handleCategoryFilter(pill) {
    // Update active state
    categoryFilter.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    
    // Update filter value
    currentCategoryFilter = pill.getAttribute('data-category');
    
    renderMaterials();
}

// Handle medium filter
function handleMediumFilter(pill) {
    const mediumFilter = document.getElementById('mediumFilter');
    // Update active state
    mediumFilter.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    
    // Update filter value
    currentMediumFilter = pill.getAttribute('data-medium');
    
    renderMaterials();
}

// Filter materials based on current filters
function filterMaterials() {
    return studyMaterials.filter(material => {
        // Class filter
        if (currentClassFilter !== 'all' && material.class !== parseInt(currentClassFilter)) {
            return false;
        }
        
        // Category filter
        if (currentCategoryFilter !== 'all' && material.categoryId !== parseInt(currentCategoryFilter)) {
            return false;
        }
        
        // Medium filter
        if (currentMediumFilter !== 'all') {
            if ((material.medium || '') !== currentMediumFilter) {
                return false;
            }
        }
        
        // Search filter - OR based matching for multiple words
        if (searchQuery) {
            const categoryName = getCategoryName(material.categoryId);
            const searchableText = `${material.title} ${categoryName} ${material.class === 10 ? '10th ssc' : '12th hsc'}`.toLowerCase();
            
            // Split search query into individual words/terms
            const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(term => term.length > 0);
            
            // Check if ANY of the search terms match (OR logic)
            const hasMatch = searchTerms.some(term => searchableText.includes(term));
            
            if (!hasMatch) {
                return false;
            }
        }
        
        return true;
    });
}

// Render materials
function renderMaterials() {
    const filteredMaterials = filterMaterials();
    
    // Update results count
    const count = filteredMaterials.length;
    resultsCount.textContent = `${count} material${count !== 1 ? 's' : ''} found`;
    
    // Clear grid
    materialsGrid.innerHTML = '';
    
    // Show empty state if no results
    if (filteredMaterials.length === 0) {
        materialsGrid.style.display = 'none';
        emptyState.classList.add('visible');
        return;
    }
    
    // Hide empty state
    emptyState.classList.remove('visible');
    materialsGrid.style.display = 'grid';
    
    // Render each material card with staggered animation
    filteredMaterials.forEach((material, index) => {
        const card = createMaterialCard(material, index);
        materialsGrid.appendChild(card);
    });
}

// Create material card element
function createMaterialCard(material, index) {
    const card = document.createElement('a');
    card.className = 'material-card';
    card.href = material.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.animationDelay = `${index * 50}ms`;
    
    // Determine icon type based on URL
    const iconType = getIconType(material.url);
    
    card.innerHTML = `
        <div class="card-icon ${iconType.class}">
            ${iconType.svg}
        </div>
        <div class="card-content">
            <h3 class="card-title">${escapeHtml(material.title)}</h3>
            <div class="card-meta">
                <!-- <span class="card-badge class-badge">${material.class === 10 ? 'SSC' : 'HSC'}</span> -->
                <span class="card-badge category-badge category-${material.categoryId}">${escapeHtml(getCategoryName(material.categoryId))}</span>
                ${material.medium ? `<span class="card-badge medium-badge">${escapeHtml(material.medium)} medium</span>` : ''}
            </div>
        </div>
        <div class="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"></path>
            </svg>
        </div>
    `;
    
    return card;
}

// Get icon type based on URL
function getIconType(url) {
    if (url.includes('youtube') || url.includes('youtu.be')) {
        return {
            class: 'video-icon',
            svg: `<svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
            </svg>`
        };
    } else if (url.includes('drive.google.com')) {
        return {
            class: 'pdf-icon',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
            </svg>`
        };
    } else {
        return {
            class: 'doc-icon',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>`
        };
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Show/hide loading state
function showLoading(show) {
    if (show) {
        loadingState.classList.add('visible');
        materialsGrid.style.display = 'none';
    } else {
        loadingState.classList.remove('visible');
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
