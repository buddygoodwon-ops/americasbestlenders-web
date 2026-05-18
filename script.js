// America's Best Lenders - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Application form handling (placeholder - integrate with real form)
    const applyButtons = document.querySelectorAll('.btn-primary:not(.btn-phone)');
    applyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#apply' || this.id === 'start-application') {
                e.preventDefault();
                // Placeholder - replace with real Jotform or application flow
                alert('Application system integration pending. For now, please call (619) 927-ROCK to get started!');
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    document.querySelectorAll('.rate-card, .superpower-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add bounce animation to superhero mascot on click
    const mascot = document.querySelector('.superhero-mascot');
    if (mascot) {
        mascot.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        });
    }

    // Navbar background change on scroll
    const nav = document.querySelector('.top-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 119, 190, 0.95)';
        } else {
            nav.style.background = 'rgba(255,255,255,0.1)';
        }
    });
});