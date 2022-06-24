// Set current year
const yearEl = document.querySelectorAll(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Make the mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
