// ====================================
// Smooth Scrolling for Navigation Links
// ====================================
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

// ====================================
// Active Nav Link on Scroll
// ====================================
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

window.addEventListener('scroll', updateActiveNav);

// ====================================
// Hamburger Menu Toggle
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
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
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
});

// ====================================
// Contact Form Submission Handler
// ====================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') || contactForm.querySelector('input[type="text"]')?.value,
            email: formData.get('email') || contactForm.querySelector('input[type="email"]')?.value,
            message: formData.get('message') || contactForm.querySelector('textarea')?.value
        };
        
        // Simulate API call (Netlify handles this automatically)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Success feedback
            submitBtn.textContent = '✓ SENT';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Thank you! We will get back to you soon.', 'success');
            
            // Reset button after delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.backgroundColor = '';
            }, 3000);
            
        } catch (error) {
            console.error('Error:', error);
            submitBtn.textContent = '✗ ERROR';
            submitBtn.style.backgroundColor = '#f44336';
            
            showNotification('Sorry, there was an error. Please try again.', 'error');
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.backgroundColor = '';
            }, 3000);
        }
    });
}

// ====================================
// Notification System
// ====================================
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

// ====================================
// Team Card Expand/Collapse Functionality
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Team cards script loaded'); // Debug log
    
    const teamCards = document.querySelectorAll('.team-card');
    console.log('Found team cards:', teamCards.length); // Debug log
    
    // Individual card expand/collapse
    teamCards.forEach(card => {
        const btn = card.querySelector('.read-more-btn');
        const shortBio = card.querySelector('.team-card-bio.short');
        const fullBio = card.querySelector('.team-card-bio.full');
        
        console.log('Card button found:', btn); // Debug log
        
        if (btn && shortBio && fullBio) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Read more button clicked'); // Debug log
                
                const isExpanded = card.classList.contains('expanded');
                
                if (isExpanded) {
                    // Collapse the card
                    card.classList.remove('expanded');
                    btn.classList.remove('active');
                    shortBio.style.display = 'block';
                    fullBio.style.display = 'none';
                    btn.textContent = 'READ MORE ↓';
                } else {
                    // Expand the card
                    card.classList.add('expanded');
                    btn.classList.add('active');
                    shortBio.style.display = 'none';
                    fullBio.style.display = 'block';
                    btn.textContent = 'READ LESS ↑';
                }
            });
            
            // Remove active state when mouse leaves (but keep card expanded if clicked)
            btn.addEventListener('mouseleave', function() {
                if (!card.classList.contains('expanded')) {
                    btn.classList.remove('active');
                }
            });
        }
    });
    
    // Show More / Show Less functionality
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenCards = document.querySelectorAll('.team-card.hidden-card');
    
    console.log('Show more button found:', showMoreBtn); // Debug log
    console.log('Hidden cards found:', hiddenCards.length); // Debug log
    
    if (showMoreBtn && hiddenCards.length > 0) {
        showMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Show more button clicked'); // Debug log
            
            const isExpanded = showMoreBtn.classList.contains('expanded');
            
            if (isExpanded) {
                // Hide the extra cards
                hiddenCards.forEach(card => {
                    card.classList.remove('show');
                    // After animation, hide completely
                    setTimeout(() => {
                        if (!card.classList.contains('show')) {
                            card.style.display = 'none';
                        }
                    }, 600);
                });
                
                showMoreBtn.classList.remove('expanded');
                const textElement = showMoreBtn.querySelector('.show-more-text');
                if (textElement) {
                    textElement.textContent = 'Show More Team Members';
                }
                
                // Scroll back to team section
                const teamSection = document.getElementById('team');
                if (teamSection) {
                    teamSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            } else {
                // Show the extra cards with stagger animation
                hiddenCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.display = 'block';
                        // Force reflow
                        void card.offsetWidth;
                        card.classList.add('show');
                    }, index * 150); // Stagger by 150ms
                });
                
                showMoreBtn.classList.add('expanded');
                const textElement = showMoreBtn.querySelector('.show-more-text');
                if (textElement) {
                    textElement.textContent = 'Show Less';
                }
            }
        });
    }
});

// ====================================
// Intersection Observer for Scroll Animations
// ====================================
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

// Apply fade-in to service cards and company logos
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-card, .company-logo').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(element);
    });
});

// ====================================
// Page Load Animation
// ====================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ====================================
// Console Branding
// ====================================
console.log('%c Raphose Engineering ', 'background: #FFC107; color: #111111; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
console.log('%c Engineering Excellence. Built on Safety, Precision & Trust. ', 'color: #FFC107; font-size: 12px; margin-top: 10px;');