document.addEventListener('DOMContentLoaded', () => {
    try {
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    }
                }
            });
        });

        // Active Nav Link on Scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

       // window.addEventListener('scroll', updateActiveNav);

        // Header Background on Scroll
        // const header = document.querySelector('.header');

       //  window.addEventListener('scroll', () => {
           //  if (!header) return;
           //  if (window.scrollY > 50) {
               //  header.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
                // header.style.backdropFilter = 'blur(10px)';
                // header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
           // } else {
                // header.style.backgroundColor = '#111111';
               // header.style.backdropFilter = 'none';
               // header.style.boxShadow = 'none';
           // }
       // });

       // ====================================
// Hamburger Menu Toggle
// ====================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
     // Form Submission Handler (with Netlify)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('.btn-primary');
        
        // Show loading state
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;
        
        // Let Netlify handle the actual submission
        // Form will redirect to success page or show message
    });
}
        

        // Notification System
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.textContent = message;
            
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 40px;
                background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
                color: white;
                padding: 16px 24px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                font-size: 14px;
                font-weight: 500;
                animation: slideInRight 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Add notification animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Global error handler to surface runtime errors
        window.addEventListener('error', (ev) => {
            console.error('Runtime error caught:', ev.error || ev.message);
            try {
                showNotification(`JS Error: ${ev.message || ev.error?.message}`, 'error');
            } catch (e) {
                // fallback: append simple banner
                const errEl = document.createElement('div');
                errEl.style.cssText = 'position:fixed;top:0;left:0;right:0;padding:8px;background:#f44336;color:#fff;z-index:10001;font-weight:700;text-align:center;';
                errEl.textContent = 'JavaScript error occurred.';
                document.body.appendChild(errEl);
            }
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply fade-in animation to cards
        document.querySelectorAll('.service-card, .team-card, .company-logo').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
            fadeInObserver.observe(element);
        });

        // Parallax Effect for Hero Section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < 800) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - scrolled / 2000;
            }
        });

        // Add cursor effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .team-card, .company-logo');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                document.body.style.cursor = 'pointer';
            });
            
            element.addEventListener('mouseleave', () => {
                document.body.style.cursor = 'default';
            });
        });

        // Prevent form resubmission on refresh
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }

        // Page Load Animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Console branding
        console.log('%c Raphose Engineering ', 'background: #FFC107; color: #111111; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
        console.log('%c Engineering Excellence. Built on Safety, Precision & Trust. ', 'color: #FFC107; font-size: 12px; margin-top: 10px;');
    } catch (err) {
        console.error('Script failed during initialization:', err);
        const banner = document.createElement('div');
        banner.style.cssText = 'position:fixed;top:0;left:0;right:0;padding:10px;background:#f44336;color:#fff;z-index:10001;text-align:center;font-weight:700;';
        banner.textContent = 'JavaScript initialization error: ' + (err && err.message ? err.message : 'See console');
        document.body.appendChild(banner);
    }
});
