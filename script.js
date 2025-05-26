// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        menuBtn.className = 'fas fa-times';
    } else {
        menuBtn.className = 'fas fa-bars';
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.service-card, .stat-card, .service-item, .news-card, .link-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add slide-in animations to hero content
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroLeft) {
        heroLeft.classList.add('slide-in-left');
        observer.observe(heroLeft);
    }
    
    if (heroRight) {
        heroRight.classList.add('slide-in-right');
        observer.observe(heroRight);
    }
    
    // Add fade-in to section headers
    const sectionHeaders = document.querySelectorAll('.section-header, .news-header-left');
    sectionHeaders.forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });
});

// Header Scroll Effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality here
            console.log('Searching for:', searchTerm);
            // You can add actual search logic here
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                // Implement search functionality here
                console.log('Searching for:', searchTerm);
                // You can add actual search logic here
            }
        }
    });
}

// Service Card Click Handlers
document.querySelectorAll('.service-card, .service-item').forEach(card => {
    card.addEventListener('click', function() {
        // Add click functionality for service cards
        const title = this.querySelector('h3').textContent;
        console.log('Service clicked:', title);
        // You can add navigation or modal functionality here
    });
});

// News Card Click Handlers
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add click functionality for news cards
        const title = this.querySelector('h3').textContent;
        console.log('News clicked:', title);
        // You can add navigation to full article here
    });
});

// Quick Link Click Handlers
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add click functionality for quick links
        const title = this.querySelector('h3').textContent;
        console.log('Quick link clicked:', title);
        // You can add navigation functionality here
    });
});

// Form Validation (if you add forms later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Loading Animation
function showLoading() {
    // Add loading spinner or animation
    console.log('Loading...');
}

function hideLoading() {
    // Hide loading spinner or animation
    console.log('Loading complete');
}

// Utility Functions
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

// Responsive Navigation
function handleResize() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        menuBtn.className = 'fas fa-bars';
    }
}

window.addEventListener('resize', debounce(handleResize, 250));

// Initialize tooltips or other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('NIDW Website loaded successfully');
    
    // Add click outside handler for mobile menu
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
});

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}