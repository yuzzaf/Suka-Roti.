// toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Menu on click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click outside navbar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
