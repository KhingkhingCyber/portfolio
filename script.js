/* ===============================
   MOBILE MENU
================================ */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon =
        menuBtn.querySelector("i");


    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* ===============================
   CLOSE MOBILE MENU
================================ */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



/* ===============================
   ACTIVE NAV
================================ */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ===============================
   TYPING EFFECT
================================ */

const typingElement =
    document.getElementById("typingText");


const words = [

    "Cyber Security Enthusiast",

    "Python Programmer",

    "Linux Explorer",

    "Web Developer"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        characterIndex++;

    } else {

        characterIndex--;

    }


    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    let speed = deleting
        ? 45
        : 75;


    if (
        !deleting &&
        characterIndex === currentWord.length
    ) {

        speed = 1800;

        deleting = true;

    }


    if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1)
            % words.length;

        speed = 500;

    }


    setTimeout(typeEffect, speed);

}


typeEffect();



/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".info-card, .skill-card, .project-card, .timeline-item, .future-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


const revealStyle =
    document.createElement("style");


revealStyle.innerHTML = `

    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;


document.head.appendChild(revealStyle);



/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const button =
            contactForm.querySelector("button");


        button.innerHTML =
            'Message Ready <i class="fa-solid fa-check"></i>';


        contactForm.reset();


        setTimeout(() => {

            button.innerHTML =
                'Send Message <i class="fa-solid fa-paper-plane"></i>';

        }, 2500);

    }
);