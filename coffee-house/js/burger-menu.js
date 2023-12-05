import getRefs from "./getRefs.js";

const { burger, mobileMenu } = getRefs();
burger.addEventListener("click", () => {
  burger.classList.toggle("enableMenu");
  mobileMenu.classList.toggle("enableMenu");
});

// function onBurger() {}
