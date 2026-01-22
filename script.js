// ==========================================
// FILE: script.js
// Professional Image Gallery Interactions
// ==========================================

/**
 * Initialize gallery on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

/**
 * Main gallery initialization function
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add keyboard navigation support
    galleryItems.forEach((item, index) => {
        // Handle Enter key press
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
        
        // Optional: Add click event for additional interactions
        item.addEventListener('click', function() {
            handleImageClick(this, index);
        });
    });
    
    // Add lazy loading observer for better performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('.gallery-image');
        images.forEach(img => imageObserver.observe(img));
    }
    
    console.log('Gallery initialized with ' + galleryItems.length + ' items');
}

/**
 * Handle image click events
 * @param {HTMLElement} item - The clicked gallery item
 * @param {number} index - Index of the clicked item
 */
function handleImageClick(item, index) {
    const caption = item.querySelector('.gallery-caption h3').textContent;
    console.log('Image clicked: ' + caption + ' (Index: ' + index + ')');
    
    // Optional: You can add lightbox functionality here
    // For example: openLightbox(index);
}

/**
 * Optional: Filter gallery by category
 * @param {string} category - Category to filter by
 */
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const badge = item.querySelector('.category-badge');
        if (category === 'all' || badge.textContent.toLowerCase() === category.toLowerCase()) {
            item.style.display = 'block';
            // Re-trigger animation
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = '';
            }, 10);
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * Add smooth scroll to top functionality
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Add scroll-to-top button if page is long
if (document.querySelector('.gallery').offsetHeight > window.innerHeight * 2) {
    // You can add a scroll-to-top button here if needed
    console.log('Page is long enough for scroll-to-top button');
}