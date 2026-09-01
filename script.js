/* =========================================================
   ANSHIKA JAISWAL PORTFOLIO
   Interactions
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

const year =
    document.getElementById("year");


/* =========================================================
   YEAR
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const isOpen =
        mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );

}


menuButton.addEventListener(
    "click",
    toggleMenu
);


/* Close menu when navigation link is clicked */

mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* Close menu using Escape */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("open")
        ) {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   PROJECT IMAGE PARALLAX / TILT
========================================================= */

const projectImages =
    document.querySelectorAll(
        ".project-image"
    );


const finePointer =
    window.matchMedia(
        "(pointer: fine)"
    );


if (finePointer.matches) {

    projectImages.forEach(image => {

        image.addEventListener(
            "mousemove",
            event => {

                const rect =
                    image.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -2;


                image.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.01)
                    `;

            }
        );


        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets =
    document.querySelectorAll(
        ".project, .service, .experience-row, .about-content, .personal-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .08,
            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealTargets.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    !targetId
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


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   MAGNETIC CIRCLE BUTTON
========================================================= */

const circleButton =
    document.querySelector(
        ".circle-link"
    );


if (
    circleButton &&
    finePointer.matches
) {

    circleButton.addEventListener(
        "mousemove",
        event => {

            const rect =
                circleButton.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left -
                rect.width / 2;

            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            circleButton.style.transform =
                `
                translate(
                    ${x * .15}px,
                    ${y * .15}px
                )
                rotate(45deg)
                `;

        }
    );


    circleButton.addEventListener(
        "mouseleave",
        () => {

            circleButton.style.transform =
                "";

        }
    );

}


/* =========================================================
   SERVICE HOVER RANDOM ACCENT
========================================================= */

const services =
    document.querySelectorAll(
        ".service"
    );


const accents = [
    "#ff5938",
    "#f5d64d",
    "#718cff",
    "#f49ac0"
];


services.forEach(
    (service, index) => {

        service.addEventListener(
            "mouseenter",
            () => {

                service.style.borderLeft =
                    `4px solid ${accents[index % accents.length]}`;

            }
        );


        service.addEventListener(
            "mouseleave",
            () => {

                service.style.borderLeft =
                    "";

            }
        );

    }
);


/* =========================================================
   CURSOR POSITION
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        document.documentElement
            .style
            .setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );


        document.documentElement
            .style
            .setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );

    }
);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "Anshika Jaiswal — Communication Designer & UX/UI Designer."
);