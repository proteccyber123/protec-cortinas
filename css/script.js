document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-times');
                icon.classList.toggle('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length && mobileMenuBtn && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Flip cards for mobile (click)
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        producto.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                const isActive = this.classList.contains('active');

                productos.forEach(p => p.classList.remove('active'));

                if (!isActive) {
                    this.classList.add('active');
                }
            }
        });
    });

    // Cerrar tarjeta al hacer click fuera en móviles
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.producto')) {
                productos.forEach(p => p.classList.remove('active'));
            }
        }
    });

    // Formspree Submission
    const form = document.querySelector(".quote-form form");
    const formStatus = document.getElementById("form-status");

    if (form && formStatus) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            formStatus.innerHTML = "Enviando tu solicitud...";
            formStatus.style.display = "block";

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return response.json().then(data => {
                            throw new Error(data.message || 'Error en el envío');
                        });
                    }
                })
                .then(() => {
                    formStatus.innerHTML = "¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.";
                    form.reset();
                })
                .catch(error => {
                    formStatus.innerHTML = "Hubo un problema al enviar tu solicitud. Por favor inténtalo nuevamente o contáctanos directamente. Detalles: " + error.message;
                });
        });
    }
});
