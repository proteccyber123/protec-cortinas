document.addEventListener('DOMContentLoaded', function () {
    
    // MENÚ HAMBURGUESA
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

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
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
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

    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.producto') && !e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
                productos.forEach(p => p.classList.remove('active'));
            }
        }
    });

    // FORMULARIO FORMSPREE
    const form = document.querySelector(".quote-form form");
    const formStatus = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            formStatus.innerHTML = "Enviando tu solicitud...";
            formStatus.style.display = "block";

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    formStatus.innerHTML = "¡Gracias! Hemos recibido tu solicitud.";
                    form.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            })
            .catch(() => {
                formStatus.innerHTML = "Hubo un problema al enviar tu solicitud. Inténtalo nuevamente.";
            });
        });
    }

});
