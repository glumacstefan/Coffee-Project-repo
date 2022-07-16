const hamburger = document.querySelector('.c-hamburger');
const navLinks = document.querySelector('.c-nav__links');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})
