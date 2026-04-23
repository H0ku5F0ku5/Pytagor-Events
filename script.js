// script.js

// Smooth scrolling for all anchor links
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// AOS library integration
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
});

// Floating contact button
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('mouseenter', () => {
    contactButton.classList.add('hover');
});
contactButton.addEventListener('mouseleave', () => {
    contactButton.classList.remove('hover');
});

// Form validation and submission handling
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add validation logic here
    // If valid, handle form submission
});

// Parallax scrolling effects on hero section
const parallax = () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPosition = 'center ' + (scrolled * 0.5) + 'px';
};

window.addEventListener('scroll', parallax);

// Scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight);
    scrollIndicator.style.width = (scrollPercent * 100) + '%';
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Testimonial carousel/slider (basic example)
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const showSlide = (index) => {
    testimonials.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
};
showSlide(currentSlide);

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
};
setInterval(nextSlide, 5000);

// Fade-in animations for elements on scroll
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Keyboard accessibility support
const focusableElements = 'a, area, button, textarea, input, select, [tabindex]';
const allFocusable = document.querySelectorAll(focusableElements);
allFocusable.forEach(el => {
    el.setAttribute('tabindex', '0'); // Ensure focusability
});

// Debounced scroll event listeners
let timeout;
const debouncedScroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        // Do scroll-related tasks here
    }, 100);
};

window.addEventListener('scroll', debouncedScroll);
