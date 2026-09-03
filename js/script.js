/**
 * Project Starter Template - Main Script
 * Responsive Navigation & Accessible Mobile Menu Handler
 */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu-wrapper");

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("active");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.classList.add("active");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
  };

  // Toggle navigation menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains("active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("active") &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close menu when clicking navigation links on mobile
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        closeMenu();
      }
    });
  });

  // Reset menu state when window is resized to desktop width
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 992 && menu.classList.contains("active")) {
        closeMenu();
      }
    }, 100);
  });
});
