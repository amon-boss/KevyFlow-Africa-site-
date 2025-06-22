// Animation au scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});

// Menu déroulant
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("change", () => {
  navMenu.style.display = menuToggle.checked ? "flex" : "none";
});
