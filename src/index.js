const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

emailMenu.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("slide-rigth");
});

