document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Abrir/cerrar menú
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuBtn.querySelector('i').classList.add('fa-bars');
            menuBtn.querySelector('i').classList.remove('fa-times');
        });
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
    
    document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');
    
    // Función para manejar el clic en móvil
    function handleCardClick(e) {
        if (window.innerWidth > 768) return; // Solo en móviles
        
        // Evitar que se active al hacer clic en enlaces internos
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        
        // Cerrar otras cards
        productos.forEach(p => {
            if (p !== this) p.classList.remove('active');
        });
        
        // Alternar estado de la card clickeada
        this.classList.toggle('active');
    }
    
    // Agregar event listeners
    productos.forEach(producto => {
        producto.addEventListener('click', handleCardClick);
    });
    
    // Cerrar cards al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.producto')) {
                productos.forEach(p => p.classList.remove('active'));
            }
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
