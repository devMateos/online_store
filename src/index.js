const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

emailMenu.addEventListener("click", () => {
    const isAsideOpen = aside.classList.contains("slide-left");
    if (isAsideOpen) {
        aside.classList.remove("slide-left");
    }

    desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", () => {
    const isAsideOpen = aside.classList.contains("slide-left");
    if (isAsideOpen) {
        aside.classList.remove("slide-left");
    }

    mobileMenu.classList.toggle("slide-rigth");
});

cartMenuIcon.addEventListener("click", () => {
    const isMobileMenuOpen = mobileMenu.classList.contains("slide-rigth");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove("slide-rigth");
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("slide-left");
});

