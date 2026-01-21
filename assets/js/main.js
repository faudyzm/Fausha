document.addEventListener('DOMContentLoaded', () => {
    console.log('Fausha Store Loaded');

    // Smooth Scrolling for anchor links
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Logic (WhatsApp Only)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[type="text"]').value.trim();
            const phone = this.querySelector('input[type="tel"]').value.trim();
            const message = this.querySelector('textarea').value.trim();

            if (!name || !phone || !message) {
                alert('Por favor completa todos los campos para poder contactarte.');
                return;
            }

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Abriendo WhatsApp...';
            submitBtn.disabled = true;

            // WhatsApp Redirection
            // Format: https://wa.me/<number>?text=<message>
            const waNumber = '18294615951'; // User provided number
            const text = `Hola Fausha Store, mi nombre es *${name}*.\n\n📱 Teléfono: ${phone}\n💬 Mensaje: ${message}`;

            // Use setTimeout to allow the user to see the button change before redirection
            setTimeout(() => {
                const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank');

                // Reset button state
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1000);
        });
    }

    // Mobile Menu Toggle logic
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto'; // Restore scroll
            });
        });
    }

    // Scroll Animations with IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const elementsToAnimate = document.querySelectorAll('.service-card, .industry-card, .pricing-card, .section-title, .hero-content');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
});
