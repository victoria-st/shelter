const BURGER = document.querySelector(".burger");
const MOBILE_MENU_BLACKOUT = document.querySelector(".mobile-menu");
const MOBILE_MENU = document.querySelector(".mobile-menu-content");

const openMobileMenu = () => {
  console.log("burger clicked");
  MOBILE_MENU_BLACKOUT.classList.remove("hidden");
  MOBILE_MENU.classList.add("mobile-menu-open");
  // MOBILE_MENU.classList.remove("mobile-menu-close");
  BURGER.classList.add("burger-transform");
};

const closeMobileMenu = () => {
  console.log("burger clicked");
  // MOBILE_MENU.classList.remove("mobile-menu-open");
  MOBILE_MENU.classList.add("mobile-menu-close");
  // MOBILE_MENU.classList.remove("mobile-menu-open");
  BURGER.classList.remove("burger-transform");
};

const openCloseMobileMenu = () => {
  if (BURGER.classList.contains("burger-transform")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
};

BURGER.addEventListener("click", openCloseMobileMenu);
MOBILE_MENU.addEventListener("animationend", () => {
  console.log("anime end");
  if (BURGER.classList.contains("burger-transform")) {
    MOBILE_MENU.classList.remove("mobile-menu-open");
  } else {
    MOBILE_MENU.classList.remove("mobile-menu-close");
    MOBILE_MENU_BLACKOUT.classList.add("hidden");
  }
});
