const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


/* =========================
   MENU MOBILE
========================= */

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isActive = nav.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isActive
        );

        menuButton.textContent = isActive ? "✕" : "☰";
    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";
        });

    });

}


/* =========================
   ANIMAÇÕES AO APARECER
========================= */

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .art-card, .contact-card"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("animate");

        observer.observe(element);

    });

} else {

    animatedElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =========================
   FECHAR MENU AO REDIMENSIONAR
========================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800 && nav) {

        nav.classList.remove("active");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";
        }

    }

});