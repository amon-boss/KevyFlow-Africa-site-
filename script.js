document.addEventListener("DOMContentLoaded", () => {
  // --- Variables DOM ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const botLinkBtn = document.getElementById("bot-link-button");
  const modalMention = document.getElementById("modal-mention-legale");
  const modalService = document.getElementById("modal-service-client");
  const mentionBtn = document.getElementById("mention-legale-btn");
  const serviceBtn = document.getElementById("service-client-btn");
  const closeButtons = document.querySelectorAll(".close-modal");

  // --- MENU HAMBURGER ---
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      // Afficher la section ciblée avec animation
      const targetId = link.getAttribute("href").substring(1);
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    });
  });

  // --- ANIMATIONS AU SCROLL ---
  // Optionnel ici car on change de section en cachant/montrant,
  // mais si tu veux un fadeIn à l'apparition, on peut le faire
  // via IntersectionObserver (simple version) :

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach(section => observer.observe(section));

  // --- BOUTON REJOINDRE BOT ---
  botLinkBtn.addEventListener("click", () => {
    // Lien caché derrière le bouton
    const botUrl = "https://t.me/kevyflowafrica_bot";
    window.open(botUrl, "_blank");
    // Petite animation au clic
    botLinkBtn.classList.add("clicked");
    setTimeout(() => botLinkBtn.classList.remove("clicked"), 300);
  });

  // --- MODALES ---
  function openModal(modal) {
    modal.classList.remove("hidden");
    // Disable scroll du body quand modale ouverte
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  mentionBtn.addEventListener("click", () => openModal(modalMention));
  serviceBtn.addEventListener("click", () => openModal(modalService));

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal);
    });
  });

  // Fermer la modale si on clique en dehors du contenu
  [modalMention, modalService].forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // --- ANIMATION AU CLIC POUR TOUS LES BOUTONS ---
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mousedown", () => {
      button.classList.add("clicked");
    });
    button.addEventListener("mouseup", () => {
      button.classList.remove("clicked");
    });
    button.addEventListener("mouseout", () => {
      button.classList.remove("clicked");
    });
  });
});
