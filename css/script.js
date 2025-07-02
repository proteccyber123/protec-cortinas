document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const productos = document.querySelectorAll('.producto');
    const form = document.querySelector(".quote-form form");
    const formStatus = document.getElementById("form-status");

    // Menú hamburguesa
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-times');
            icon.classList.toggle('fa-bars');
        });
    }

    // Cerrar menú al hacer clic en un enlace (solo en móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Tarjetas en móvil
    productos.forEach(producto => {
        producto.addEventListener('click', function(e) {
            if (window.innerWidth > 768) return;
            if (e.target.tagName === 'A' || e.target.closest('a')) return;

            productos.forEach(p => {
                if (p !== this) p.classList.remove('active');
            });
            this.classList.toggle('active');
        });
    });

    // Cerrar tarjeta al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.producto')) {
                productos.forEach(p => p.classList.remove('active'));
            }
        }
    });

    // Envío del formulario
    if (form) {
        form.addEventListener("submit", function(e) {
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
                formStatus.innerHTML = "Hubo un problema al enviar tu solicitud.";
            });
        });
    }
});

// Efecto de scroll en header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
