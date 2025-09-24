// app.js
// JavaScript for interactivity, accessibility enhancements, and form validation

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ---- Navigation toggle for mobile ---- //
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('open');
        });

        // Close menu on link click (mobile)
        navMenu.querySelectorAll('.nav__link').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navToggle.setAttribute('aria-expanded', false);
                    navMenu.classList.remove('open');
                }
            });
        });
    }

    // ---- Smooth scrolling for navigation links ---- //
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20; // 20px extra padding
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Skip link focus fix for browsers ---- //
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
                mainContent.addEventListener('blur', function() {
                    mainContent.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    }

    // ---- Form validation and submission ---- //
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const isValid = validateForm(contactForm);
            if (isValid) {
                // Show success message
                showSuccessMessage();
                contactForm.reset();
                clearErrors();
            }
        });
    }

    function validateForm(form) {
        let isValid = true;

        // Clear previous errors
        clearErrors();

        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const messageInput = form.querySelector('#message');

        if (!nameInput.value.trim()) {
            setError(nameInput, 'Please enter your name.');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            setError(emailInput, 'Please enter your email.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            setError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            setError(messageInput, 'Please enter a description of your project.');
            isValid = false;
        }

        return isValid;
    }

    function setError(input, message) {
        const errorEl = document.getElementById(`${input.id}-error`);
        if (errorEl) {
            errorEl.textContent = message;
        }
        input.classList.add('error');
    }

    function clearErrors() {
        document.querySelectorAll('.form-error').forEach(function(el) {
            el.textContent = '';
        });
        document.querySelectorAll('.form-control').forEach(function(el) {
            el.classList.remove('error');
        });
    }

    function showSuccessMessage() {
        // Create and show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'status status--success';
        successDiv.style.position = 'fixed';
        successDiv.style.top = '80px';
        successDiv.style.right = '20px';
        successDiv.style.zIndex = '9999';
        successDiv.textContent = 'Thank you! Your message has been sent.';
        
        document.body.appendChild(successDiv);
        
        // Remove success message after 5 seconds
        setTimeout(function() {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);
    }

    // ---- Active navigation highlighting ---- //
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');
        
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - headerHeight - 50;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial call to set active link
    updateActiveNavLink();

    // ---- Accessibility improvements ---- //
    
    // Keyboard navigation for service cards
    document.querySelectorAll('.service-card, .testimonial-card, .gallery-item').forEach(function(card) {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Add subtle focus indication
                card.style.transform = 'scale(1.02)';
                setTimeout(function() {
                    card.style.transform = '';
                }, 150);
            }
        });
    });

    // Announce page changes for screen readers
    function announcePageChange(sectionName) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Navigated to ${sectionName} section`;
        document.body.appendChild(announcement);
        
        setTimeout(function() {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Add click handlers for phone numbers to improve mobile experience
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
        link.addEventListener('click', function() {
            // On non-mobile devices, show a message
            if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                alert('Phone number: ' + this.textContent);
            }
        });
    });

});