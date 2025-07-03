document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
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
    
    // Flip cards for mobile (click)
    const productos = document.querySelectorAll('.producto');
    
    productos.forEach(producto => {
        producto.addEventListener('click', function(e) {
            // Solo activar en móviles
            if (window.innerWidth <= 768) {
                // Cerrar otras tarjetas antes de abrir esta
                productos.forEach(p => {
                    if (p !== this) p.classList.remove('active');
                });
                
                this.classList.toggle('active');
            }
        });
    });

    // Formspree Submission
const form = document.querySelector(".quote-form form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    
    // Mostrar mensaje de enviando
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
            formStatus.innerHTML = "¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.";
            form.reset();
        } else {
            throw new Error('Error en el envío');
        }
    })
    .catch(error => {
        formStatus.innerHTML = "Hubo un problema al enviar tu solicitud. Por favor inténtalo nuevamente o contáctanos directamente.";
    });
});
    
    // Cerrar tarjeta al hacer click fuera en móviles
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.producto')) {
                productos.forEach(p => p.classList.remove('active'));
            }
        }
    });
});
