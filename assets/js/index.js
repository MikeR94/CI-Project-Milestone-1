const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navLinks = document.getElementsByClassName("nav-link");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks[0].addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks[1].addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks[2].addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks[3].addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});