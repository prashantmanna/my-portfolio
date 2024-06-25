document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    const menuLinks = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hambergur-icon");
    if (menuLinks && hamburgerIcon) {
      menuLinks.classList.toggle("open");
      hamburgerIcon.classList.toggle("open");
    } else {
      console.error("Menu links or hamburger icon not found");
    }
  }

  // Expose the function to the global scope
  window.toggleMenu = toggleMenu;
});
