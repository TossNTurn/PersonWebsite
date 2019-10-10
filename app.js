const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const Logo = document.querySelector(".middle");
const Icon = document.querySelector(".icon");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

hamburger.addEventListener("click", () => {
    Logo.classList.toggle("open");
});


