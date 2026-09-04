/* =========================================================
   PROTEC CORTINAS
   SCRIPT PRINCIPAL V8
   SECURITY + PROCESS EXPERIENCE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS PRINCIPALES
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-navigation");

    const progressBar =
        document.querySelector(
            "#scroll-progress-bar, .scroll-progress span"
        );

    const backToTop =
        document.querySelector(".back-to-top");


    /* =====================================================
       SEGURIDAD / CORTINA
    ===================================================== */

    const securitySection =
        document.querySelector(".security-animation");

    const securityBuilding =
        document.querySelector(".security-building");

    const metalShutter =
        document.querySelector(".metal-shutter");

    const revealImage =
        document.querySelector(".security-reveal img");

    const revealBrand =
        document.querySelector(".security-reveal-brand");

    const securityMessage =
        document.querySelector(".security-message");

    const securityHeading =
        document.querySelector(".security-heading");

    const securityScroll =
        document.querySelector(".security-scroll");


    /* =====================================================
       PROCESO
    ===================================================== */

    const processSection =
        document.querySelector(".process-section");

    const processGrid =
        document.querySelector(".process-grid");

    const processItems =
        document.querySelectorAll(".process-item");


    /* =====================================================
       REVEALS GENERALES
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    /* =====================================================
       FORMULARIO
    ===================================================== */

    const quoteForm =
        document.querySelector("#quote-form");

    const formStatus =
        document.querySelector("#form-status");


    /* =====================================================
       VARIABLES DE SEGURIDAD
    ===================================================== */

    let securityStage = null;

    let securityStageReady = false;


    /* =====================================================
       VARIABLES DE PROCESO
    ===================================================== */

    let processAnimationReady =
        false;


    /* =====================================================
       UTILIDADES
    ===================================================== */

    function clamp(
        value,
        min = 0,
        max = 1
    ) {

        return Math.max(
            min,
            Math.min(
                max,
                value
            )
        );

    }


    function smoothstep(value) {

        value =
            clamp(value);

        return (
            value *
            value *
            (3 - 2 * value)
        );

    }


    function easeOutCubic(value) {

        value =
            clamp(value);

        return (
            1 -
            Math.pow(
                1 - value,
                3
            )
        );

    }


    /* =====================================================
       CREAR ESCENA STICKY
       
       La sección de seguridad se convierte en una
       experiencia cinematográfica controlada por scroll.
    ===================================================== */

    function createSecurityStage() {

        if (
            !securitySection ||
            securityStageReady
        ) {

            return;

        }


        securityStage =
            document.createElement("div");


        securityStage.className =
            "security-stage";


        /*
            Movemos todo el contenido existente
            dentro del escenario sticky.
        */

        while (securitySection.firstChild) {

            securityStage.appendChild(
                securitySection.firstChild
            );

        }


        securitySection.appendChild(
            securityStage
        );


        /*
            La sección necesita permanecer visible
            para que sticky funcione correctamente.
        */

        securitySection.style.position =
            "relative";

        securitySection.style.overflow =
            "visible";


        /*
            Configuración del escenario.
        */

        securityStage.style.position =
            "sticky";

        securityStage.style.top =
            "0";

        securityStage.style.width =
            "100%";

        securityStage.style.height =
            "100vh";

        securityStage.style.overflow =
            "hidden";

        securityStage.style.isolation =
            "isolate";


        securityStageReady =
            true;


        /*
            El logo se coloca dentro de la cortina.

            Esto es fundamental para que el logo
            se mueva físicamente junto con ella.
        */

        if (
            revealBrand &&
            metalShutter &&
            !metalShutter.contains(
                revealBrand
            )
        ) {

            metalShutter.appendChild(
                revealBrand
            );

        }


        /*
            Encabezado de la escena.
        */

        if (securityHeading) {

            securityHeading.style.position =
                "absolute";

            securityHeading.style.top =
                "0";

            securityHeading.style.left =
                "0";

            securityHeading.style.width =
                "100%";

            securityHeading.style.height =
                "100vh";

        }


        /*
            Edificio.
        */

        if (securityBuilding) {

            securityBuilding.style.position =
                "absolute";

            securityBuilding.style.left =
                "50%";

            securityBuilding.style.top =
                "52%";

        }

    }


    createSecurityStage();


    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            const preloader =
                document.querySelector(
                    ".preloader"
                );


            if (!preloader) {
                return;
            }


            setTimeout(
                () => {

                    preloader.classList.add(
                        "loaded"
                    );

                },
                500
            );

        }
    );


    /* =====================================================
       HEADER
    ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }


        if (
            window.scrollY >
            70
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (
        menuToggle &&
        navigation
    ) {

        function openMenu() {

            navigation.classList.add(
                "open"
            );

            menuToggle.classList.add(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.classList.add(
                "menu-open"
            );

        }


        function closeMenu() {

            navigation.classList.remove(
                "open"
            );

            menuToggle.classList.remove(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }


        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navigation.classList.contains(
                        "open"
                    );


                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        closeMenu
                    );

                }
            );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMenu();

                }

            }
        );

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function updateScrollProgress() {

        if (!progressBar) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (
            documentHeight <= 0
        ) {

            return;

        }


        const progress =
            (
                scrollTop /
                documentHeight
            ) *
            100;


        progressBar.style.height =
            `${Math.min(
                progress,
                100
            )}%`;

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }


        if (
            window.scrollY >
            700
        ) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top:
                        0,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =====================================================
       REVEAL GENERAL
    ===================================================== */

    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold:
                        0.08,

                    rootMargin:
                        "0px 0px -50px 0px"

                }

            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       PREPARAR PROCESO
    ===================================================== */

    function prepareProcessAnimation() {

        if (
            !processSection ||
            !processItems.length ||
            processAnimationReady
        ) {

            return;

        }


        processAnimationReady =
            true;


        /*
            Cada proceso recibe variables CSS
            que luego pueden utilizarse para
            pequeños movimientos progresivos.
        */

        processItems.forEach(
            (item, index) => {

                item.style.setProperty(
                    "--process-index",
                    index
                );


                item.style.setProperty(
                    "--process-delay",
                    `${index * 0.08}s`
                );

            }
        );

    }


    prepareProcessAnimation();


    /* =====================================================
       ANIMACIÓN DE PROCESO
       
       A diferencia del reveal general, aquí el scroll
       controla ligeramente la intensidad de cada etapa.
    ===================================================== */

    function updateProcessAnimation() {

        if (
            !processSection ||
            !processItems.length
        ) {

            return;

        }


        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        if (reducedMotion) {

            processItems.forEach(
                item => {

                    item.style.setProperty(
                        "--process-progress",
                        "1"
                    );

                    item.style.transform =
                        "translate3d(0,0,0)";

                }
            );

            return;

        }


        const sectionRect =
            processSection.getBoundingClientRect();


        const viewportHeight =
            window.innerHeight;


        /*
            Progreso general de entrada de la sección.
        */

        const sectionProgress =
            clamp(
                (
                    viewportHeight -
                    sectionRect.top
                ) /
                (
                    viewportHeight +
                    sectionRect.height * 0.45
                )
            );


        /*
            Cada tarjeta recibe una zona de activación
            ligeramente desplazada.
        */

        processItems.forEach(
            (item, index) => {

                const rect =
                    item.getBoundingClientRect();


                const itemCenter =
                    rect.top +
                    rect.height / 2;


                const activationStart =
                    viewportHeight *
                    (
                        0.96 -
                        index *
                        0.035
                    );


                const activationEnd =
                    viewportHeight *
                    (
                        0.42 -
                        index *
                        0.02
                    );


                const itemProgress =
                    clamp(
                        (
                            activationStart -
                            itemCenter
                        ) /
                        (
                            activationStart -
                            activationEnd
                        )
                    );


                const progress =
                    Math.max(
                        sectionProgress,
                        itemProgress
                    );


                const eased =
                    easeOutCubic(
                        progress
                    );


                item.style.setProperty(
                    "--process-progress",
                    eased.toFixed(3)
                );


                /*
                    Micro movimiento vertical.

                    No sustituimos la animación reveal
                    del CSS; solamente agregamos una
                    sensación de profundidad.
                */

                if (
                    item.classList.contains(
                        "visible"
                    )
                ) {

                    const lift =
                        (
                            1 -
                            eased
                        ) *
                        7;


                    item.style.transform =
                        `translate3d(
                            0,
                            ${lift}px,
                            0
                        )`;

                }

            }
        );


        /*
            La línea central del proceso recibe
            una pequeña sensación de crecimiento.
        */

        if (processGrid) {

            const gridProgress =
                easeOutCubic(
                    clamp(
                        (
                            viewportHeight -
                            sectionRect.top -
                            80
                        ) /
                        (
                            viewportHeight *
                            0.65
                        )
                    )
                );


            processGrid.style.setProperty(
                "--process-line-progress",
                gridProgress.toFixed(3)
            );

        }

    }


    /* =====================================================
       NAVEGACIÓN ACTIVA
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '.main-navigation a[href^="#"]'
        );


    function updateActiveNavigation() {

        if (!sections.length) {
            return;
        }


        const currentPosition =
            window.scrollY +
            180;


        let currentSection =
            "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    currentPosition >=
                    sectionTop &&
                    currentPosition <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const isSecuritySection =
                            target ===
                            securitySection;


                        const headerOffset =
                            window.innerWidth <=
                            600
                                ? 70
                                : 90;


                        let targetPosition;


                        if (
                            isSecuritySection
                        ) {

                            targetPosition =
                                target.offsetTop -
                                headerOffset;

                        } else {

                            targetPosition =
                                target.getBoundingClientRect()
                                    .top +
                                window.scrollY -
                                headerOffset;

                        }


                        window.scrollTo({

                            top:
                                Math.max(
                                    0,
                                    targetPosition
                                ),

                            behavior:
                                "smooth"

                        });

                    }
                );

            }
        );


    /* =====================================================
       ANIMACIÓN DE SEGURIDAD
       
       V8 — CINEMATIC SCROLL EXPERIENCE
    ===================================================== */

    function updateSecurityAnimation() {

        if (
            !securitySection ||
            !securityBuilding ||
            !metalShutter ||
            !securityStage
        ) {

            return;

        }


        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        /* =================================================
           REDUCED MOTION
        ================================================= */

        if (reducedMotion) {

            metalShutter.style.transform =
                "translate3d(0,-108%,0)";


            if (revealImage) {

                revealImage.style.transform =
                    "scale(1)";


                revealImage.style.filter =
                    "saturate(1) contrast(1.05) brightness(1)";

            }


            if (revealBrand) {

                revealBrand.style.opacity =
                    "1";


                revealBrand.style.transform =
                    "translate(-50%,-50%)";

            }


            if (securityMessage) {

                securityMessage.style.opacity =
                    "1";


                securityMessage.style.transform =
                    "translateX(-50%)";

            }


            if (securityHeading) {

                securityHeading.style.opacity =
                    "0";

            }


            if (securityScroll) {

                securityScroll.style.opacity =
                    "0";

            }


            return;

        }


        /* =================================================
           DIMENSIONES
        ================================================= */

        const sectionRect =
            securitySection.getBoundingClientRect();


        const sectionTop =
            sectionRect.top +
            window.scrollY;


        const sectionHeight =
            securitySection.offsetHeight;


        const viewportHeight =
            window.innerHeight;


        const headerHeight =
            header
                ? header.getBoundingClientRect()
                    .height
                : 0;


        const stageHeight =
            Math.max(
                1,
                viewportHeight -
                headerHeight
            );


        /*
            Inicio exacto.
        */

        const animationStart =
            sectionTop -
            headerHeight;


        /*
            Final exacto.
        */

        const animationEnd =
            sectionTop +
            sectionHeight -
            stageHeight;


        const animationDistance =
            Math.max(
                1,
                animationEnd -
                animationStart
            );


        /* =================================================
           PROGRESO
        ================================================= */

        let progress =
            (
                window.scrollY -
                animationStart
            ) /
            animationDistance;


        progress =
            clamp(progress);


        /* =================================================
           EDIFICIO
        ================================================= */

        const buildingProgress =
            smoothstep(
                clamp(
                    progress *
                    1.15
                )
            );


        const buildingScale =
            0.94 +
            buildingProgress *
            0.06;


        const buildingY =
            30 -
            buildingProgress *
            30;


        securityBuilding.style.transform =
            `
            translate(
                -50%,
                calc(-50% + ${buildingY}px)
            )
            scale(${buildingScale})
            `;


        securityBuilding.style.opacity =
            0.86 +
            buildingProgress *
            0.14;


        /* =================================================
           CORTINA
           
           0%   = cerrada
           108% = completamente arriba
        ================================================= */

        const shutterMove =
            progress *
            108;


        metalShutter.style.transform =
            `
            translate3d(
                0,
                -${shutterMove}%,
                0
            )
            `;


        /* =================================================
           LOGO
        ================================================= */

        if (revealBrand) {

            revealBrand.style.opacity =
                "1";


            revealBrand.style.transform =
                "translate(-50%,-50%)";

        }


        /* =================================================
           INTERIOR
        ================================================= */

        if (revealImage) {

            const imageProgress =
                smoothstep(
                    clamp(
                        (
                            progress -
                            0.08
                        ) /
                        0.75
                    )
                );


            const imageScale =
                1.08 -
                imageProgress *
                0.08;


            const imageBrightness =
                0.70 +
                imageProgress *
                0.30;


            revealImage.style.transform =
                `scale(${imageScale})`;


            revealImage.style.filter =
                `
                saturate(
                    ${0.80 +
                    imageProgress *
                    0.18}
                )
                contrast(
                    ${1.04 +
                    imageProgress *
                    0.04}
                )
                brightness(
                    ${imageBrightness}
                )
                `;

        }


        /* =================================================
           MENSAJE FINAL
        ================================================= */

        if (securityMessage) {

            const messageProgress =
                clamp(
                    (
                        progress -
                        0.82
                    ) /
                    0.18
                );


            const messageEase =
                smoothstep(
                    messageProgress
                );


            securityMessage.style.opacity =
                messageEase;


            const messageY =
                (
                    1 -
                    messageEase
                ) *
                35;


            securityMessage.style.transform =
                `
                translateX(-50%)
                translateY(${messageY}px)
                `;

        }


        /* =================================================
           TÍTULO
        ================================================= */

        if (securityHeading) {

            const headingProgress =
                clamp(
                    progress /
                    0.24
                );


            const headingEase =
                smoothstep(
                    headingProgress
                );


            securityHeading.style.opacity =
                1 -
                headingEase;


            securityHeading.style.transform =
                `
                translateY(
                    ${headingEase * -45}px
                )
                `;

        }


        /* =================================================
           INDICADOR
        ================================================= */

        if (securityScroll) {

            const scrollOpacity =
                clamp(
                    1 -
                    progress *
                    5
                );


            securityScroll.style.opacity =
                scrollOpacity;

        }


        /* =================================================
           SOMBRA
        ================================================= */

        const shadowOpacity =
            Math.max(
                0.08,
                0.68 -
                progress *
                0.58
            );


        metalShutter.style.boxShadow =
            `
            0 35px 90px
            rgba(
                0,
                0,
                0,
                ${shadowOpacity}
            )
            `;

    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-background img"
        );


    function updateHeroParallax() {

        if (!heroImage) {
            return;
        }


        if (
            window.scrollY >
            window.innerHeight
        ) {

            return;

        }


        const movement =
            window.scrollY *
            0.12;


        heroImage.style.transform =
            `
            scale(1.04)
            translateY(
                ${movement}px
            )
            `;

    }


    /* =====================================================
       FORMULARIO
    ===================================================== */

    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                if (formStatus) {

                    formStatus.textContent =
                        "Enviando tu solicitud...";


                    formStatus.className =
                        "form-status";

                }


                const submitButton =
                    quoteForm.querySelector(
                        ".form-submit"
                    );


                if (submitButton) {

                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        `
                        <span>Enviando...</span>
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        `;

                }


                try {

                    const formData =
                        new FormData(
                            quoteForm
                        );


                    const response =
                        await fetch(
                            quoteForm.action,
                            {

                                method:
                                    "POST",

                                body:
                                    formData,

                                headers: {

                                    Accept:
                                        "application/json"

                                }

                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            "No fue posible enviar la solicitud."
                        );

                    }


                    if (formStatus) {

                        formStatus.textContent =
                            "¡Solicitud enviada! Nos pondremos en contacto contigo muy pronto.";


                        formStatus.className =
                            "form-status success";

                    }


                    quoteForm.reset();


                } catch (error) {

                    console.error(
                        "Error Formspree:",
                        error
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Hubo un problema al enviar tu solicitud. Puedes contactarnos directamente por WhatsApp.";


                        formStatus.className =
                            "form-status error";

                    }

                } finally {

                    if (submitButton) {

                        submitButton.disabled =
                            false;


                        submitButton.innerHTML =
                            `
                            <span>
                                Enviar solicitud
                            </span>

                            <i class="fa-solid fa-arrow-right"></i>
                            `;

                    }

                }

            }
        );

    }


    /* =====================================================
       MAPA
    ===================================================== */

    const mapButton =
        document.querySelector(
            "[data-map-link]"
        );


    if (mapButton) {

        mapButton.addEventListener(
            "click",
            () => {

                const url =
                    mapButton.dataset.mapLink;


                if (url) {

                    window.open(
                        url,
                        "_blank",
                        "noopener,noreferrer"
                    );

                }

            }
        );

    }


    /* =====================================================
       PRODUCTOS
    ===================================================== */

    const productCards =
        document.querySelectorAll(
            ".product-card"
        );


    productCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 70}ms`;


            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.zIndex =
                        "5";


                    card.classList.add(
                        "product-active"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.zIndex =
                        "";


                    card.classList.remove(
                        "product-active"
                    );

                }
            );

        }
    );


    /* =====================================================
       PRODUCTO DESTACADO
    ===================================================== */

    const featuredProduct =
        document.querySelector(
            ".featured-product"
        );


    if (featuredProduct) {

        const featuredImage =
            featuredProduct.querySelector(
                ".featured-image img"
            );


        featuredProduct.addEventListener(
            "mouseenter",
            () => {

                featuredProduct.classList.add(
                    "product-featured-active"
                );

            }
        );


        featuredProduct.addEventListener(
            "mouseleave",
            () => {

                featuredProduct.classList.remove(
                    "product-featured-active"
                );

            }
        );


        if (
            featuredImage &&
            !("ontouchstart" in window)
        ) {

            featuredProduct.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        featuredProduct.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height;


                    const moveX =
                        (
                            x -
                            0.5
                        ) *
                        8;


                    const moveY =
                        (
                            y -
                            0.5
                        ) *
                        5;


                    featuredImage.style.transform =
                        `
                        scale(1.08)
                        translate(
                            ${moveX}px,
                            ${moveY}px
                        )
                        `;

                }
            );


            featuredProduct.addEventListener(
                "mouseleave",
                () => {

                    featuredImage.style.transform =
                        "scale(1.03)";

                }
            );

        }


        featuredProduct.addEventListener(
            "mouseenter",
            () => {

                featuredProduct.style.zIndex =
                    "5";

            }
        );


        featuredProduct.addEventListener(
            "mouseleave",
            () => {

                featuredProduct.style.zIndex =
                    "";

            }
        );

    }


    /* =====================================================
       PARALLAX PRODUCTOS
    ===================================================== */

    function updateProductParallax() {

        if (
            document.body.classList.contains(
                "touch-device"
            )
        ) {

            return;

        }


        if (
            !productCards.length
        ) {

            return;

        }


        const viewportHeight =
            window.innerHeight;


        productCards.forEach(
            card => {

                const rect =
                    card.getBoundingClientRect();


                if (
                    rect.bottom <
                        -100 ||
                    rect.top >
                        viewportHeight +
                        100
                ) {

                    return;

                }


                if (
                    card.classList.contains(
                        "product-active"
                    )
                ) {

                    return;

                }


                const center =
                    rect.top +
                    rect.height /
                    2;


                const distance =
                    center -
                    viewportHeight /
                    2;


                const movement =
                    Math.max(
                        -6,
                        Math.min(
                            6,
                            distance *
                            -0.01
                        )
                    );


                const image =
                    card.querySelector(
                        ".product-card-image img"
                    );


                if (!image) {
                    return;
                }


                image.style.transform =
                    `
                    scale(1.035)
                    translateY(
                        ${movement}px
                    )
                    `;

            }
        );

    }


    /* =====================================================
       TOUCH
    ===================================================== */

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;


    if (isTouchDevice) {

        document.body.classList.add(
            "touch-device"
        );

    }


    /* =====================================================
       RAF SCROLL
    ===================================================== */

    let ticking =
        false;


    function requestScrollUpdate() {

        if (ticking) {
            return;
        }


        window.requestAnimationFrame(
            () => {

                updateHeader();

                updateScrollProgress();

                updateBackToTop();

                updateActiveNavigation();

                updateSecurityAnimation();

                updateProcessAnimation();

                updateProductParallax();

                updateHeroParallax();


                ticking =
                    false;

            }
        );


        ticking =
            true;

    }


    /* =====================================================
       EVENTOS
    ===================================================== */

    window.addEventListener(
        "scroll",
        requestScrollUpdate,
        {
            passive:
                true
        }
    );


    window.addEventListener(
        "resize",
        requestScrollUpdate
    );


    /* =====================================================
       INICIALIZACIÓN
    ===================================================== */

    updateHeader();

    updateScrollProgress();

    updateBackToTop();

    updateActiveNavigation();

    updateSecurityAnimation();

    updateProcessAnimation();

    updateProductParallax();

    updateHeroParallax();

});
