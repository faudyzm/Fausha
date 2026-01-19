document.addEventListener('DOMContentLoaded', () => {
    console.log('Fausha Store Loaded');

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

        // Contact Form Logic (WhatsApp)
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', async function (e) {
                e.preventDefault();

                const name = this.querySelector('input[type="text"]').value;
                const phone = this.querySelector('input[type="tel"]').value;
                const message = this.querySelector('textarea').value;

                if (!name || !phone || !message) {
                    alert('Por favor completa todos los campos.');
                    return;
                }

                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;

                // 1. Send Email (via Formspree)
                // ⚠️ IMPORTANTE: Crea tu cuenta en https://formspree.io y reemplaza "TU_ID_AQUI" con el código que te den.
                // Ejemplo: https://formspree.io/f/xyzmnpqr
                const formspreeId = 'TU_ID_AQUI';

                try {
                    await fetch(`https://formspree.io/f/${formspreeId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name, phone, message })
                    });
                } catch (error) {
                    console.error('Error sending email:', error);
                    // Continue to WhatsApp anyway
                }

                // 2. Open WhatsApp
                const waNumber = '18294615951';
                const text = `Hola Fausha Store, soy ${name} (${phone}). ${message}`;
                const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

                window.open(url, '_blank');

                // Reset form
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                this.reset();
            });
        }

        // Optional: Add simple scroll animation reveal here if needed in future
        
        // Mobile Menu Toggle logic
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const header = document.querySelector('header');

        if(menuToggle && navLinks) {
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
                if(entry.isIntersecting) {
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
