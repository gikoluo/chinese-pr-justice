// Story cards: show full story in modal
(function () {
    const modal = document.getElementById('story-modal');
    const backdrop = modal.querySelector('.story-modal-backdrop');
    const closeBtn = modal.querySelector('.story-modal-close');
    const titleEl = modal.querySelector('.story-modal-title');
    const locationEl = modal.querySelector('.story-modal-location');
    const bodyEl = modal.querySelector('.story-modal-body');

    function openModal(card) {
        const meta = card.querySelector('.story-meta');
        const full = card.querySelector('.story-content-full');
        if (!meta || !full) return;
        const titleNode = meta.querySelector('.story-meta-title') || meta.querySelector('h3');
        titleEl.textContent = titleNode?.textContent?.trim() || '';
        locationEl.textContent = meta.querySelector('.story-location')?.textContent?.trim() || '';
        locationEl.style.display = locationEl.textContent ? '' : 'none';
        bodyEl.innerHTML = full.innerHTML;
        modal.removeAttribute('hidden');
        document.body.classList.add('story-modal-open');
        closeBtn.focus();
    }

    function closeModal() {
        modal.setAttribute('hidden', '');
        document.body.classList.remove('story-modal-open');
    }

    document.querySelectorAll('.story-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.story-card');
            if (card && card.querySelector('.story-content-full')) openModal(card);
        });
    });
    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
})();

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

// Mobile hamburger menu toggle
(function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();

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

console.log('Justice for PR Applicants - Website loaded successfully');
