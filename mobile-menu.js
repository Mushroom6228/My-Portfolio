// Funcionalidade do menu hamburger mobile
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const menuLinks = document.querySelectorAll(".menu-link");
  const headerContainer = document.querySelector(".header-container");
  const body = document.querySelector("body");

  function openMenu() {
    hamburgerMenu.classList.add("active");
    hamburgerBtn.classList.add("active");
    headerContainer.classList.add("menu-open");
    body.classList.add("no-scroll");
  }

  function closeMenu() {
    hamburgerMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    headerContainer.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function () {
      if (hamburgerMenu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Fechar menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Fechar menu ao clicar fora dele

});
