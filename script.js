// Smooth scrolling for navigation links
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

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animation state
    const animateElements = document.querySelectorAll('.demand-card, .story-card, .join-card, .event-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed for smaller screens)
const createMobileMenu = () => {
    const nav = document.querySelector('.navbar .container');
    const menu = document.querySelector('.nav-menu');

    // Only create mobile menu on small screens
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-dark);
                display: none;
            `;

            nav.insertBefore(toggle, menu);

            toggle.addEventListener('click', () => {
                menu.classList.toggle('menu-open');
            });
        }
    }
};

// Handle window resize
window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Form submission handler (if you add a form later)
const handleFormSubmit = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your interest! We will contact you soon.');
            form.reset();
        });
    }
};

// Add copy to clipboard functionality for contact information
document.querySelectorAll('.join-cta-box p').forEach(p => {
    if (p.textContent.includes('Email:') || p.textContent.includes('WeChat:') || p.textContent.includes('Phone:')) {
        p.style.cursor = 'pointer';
        p.title = 'Click to copy';

        p.addEventListener('click', () => {
            const text = p.textContent.split(':')[1]?.trim();
            if (text && !text.includes('[Add')) {
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = p.textContent;
                    p.textContent = '✓ Copied!';
                    p.style.color = 'var(--success-color)';
                    setTimeout(() => {
                        p.textContent = originalText;
                        p.style.color = '';
                    }, 2000);
                });
            }
        });
    }
});

// Print friendly version
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Statistics counter animation
const animateCount = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('+')) {
                    const num = parseInt(text.replace(/\D/g, ''));
                    if (!isNaN(num)) {
                        stat.textContent = '0';
                        setTimeout(() => {
                            animateCount(stat, num);
                            stat.textContent += '+';
                        }, 200);
                    }
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const hero = document.querySelector('.hero');
if (hero) {
    heroObserver.observe(hero);
}

console.log('Justice for PR Applicants - Website loaded successfully');
