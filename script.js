/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("portfolioTheme", "dark");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("portfolioTheme", "light");

        }

    });

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typingText");

const roles = [
    "Front-End Web Developer",
    "BCA Student",
    "Web Designer",
    "JavaScript Developer",
    "Future Full Stack Developer"
];

let roleIndex = 0;
let characterIndex = 0;

let isDeleting = false;

function typingAnimation() {

    if (!typingText) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent =
        currentRole.substring(0, characterIndex);


    let typingSpeed = isDeleting ? 50 : 100;


    if (!isDeleting && characterIndex === currentRole.length) {

        typingSpeed = 1800;

        isDeleting = true;

    }


    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        typingSpeed = 500;

    }


    setTimeout(typingAnimation, typingSpeed);
}

typingAnimation();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + sectionId) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

const certificateModal =
    document.getElementById("certificateModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalClose =
    document.getElementById("modalClose");

const certificateButtons =
    document.querySelectorAll(".view-certificate");


certificateButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const image =
            button.getAttribute("data-image");

        const title =
            button.getAttribute("data-title");

        modalImage.src = image;
        modalImage.alt = title;

        modalTitle.textContent = title;

        certificateModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE MODAL */

if (modalClose) {

    modalClose.addEventListener("click", closeCertificateModal);

}


/* CLOSE WHEN CLICKING OUTSIDE */

if (certificateModal) {

    certificateModal.addEventListener("click", function (event) {

        if (event.target === certificateModal) {

            closeCertificateModal();

        }

    });

}


/* CLOSE WITH ESC KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeCertificateModal();

    }

});


function closeCertificateModal() {

    certificateModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "Gaurav Kumar Portfolio loaded successfully!"
);