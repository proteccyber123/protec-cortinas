document.addEventListener('DOMContentLoaded', function () {

    // MENÚ HAMBURGUESA
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    if (navLinks.length && menuBtn) {
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // HEADER SCROLL EFECTO
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: elementPosition - headerOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FLIP CARDS EN MÓVIL
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        producto.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return; // Solo en móvil
            if (e.target.tagName === 'A' || e.target.closest('a')) return;

            productos.forEach(p => {
                if (p !== this) p.classList.remove('active');
            });
            this.classList.toggle('active');
        });
    });

    // Cierra las cards y el menú si haces clic fuera
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            const isProducto = e.target.closest('.producto');
            const isNav = e.target.closest('nav');
            const isMenuBtn = e.target.closest('.mobile-menu-btn');

            if (!isProducto && !isNav && !isMenuBtn) {
                productos.forEach(p => p.classList.remove('active'));
                nav.classList.remove('active');

                if (menuBtn) {
                    const icon = menuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }
    });

    // Evitar que el menú se cierre si haces clic dentro
    if (nav) {
        nav.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    // FORMULARIO FORMSPREE
    const form = document.querySelector(".quote-form form");
    const formStatus = document.getElementById("form-status");

    if (form && formStatus) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            formStatus.textContent = "Enviando tu solicitud...";
            formStatus.style.display = "block";

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    formStatus.textContent = "¡Gracias! Hemos recibido tu solicitud.";
                    form.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            })
            .catch(() => {
                formStatus.textContent = "Hubo un problema al enviar tu solicitud. Inténtalo nuevamente.";
            });
        });
    }

});
