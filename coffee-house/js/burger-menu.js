import getRefs from "./getRefs.js";

const { burger, mobileMenu } = getRefs();
burger.addEventListener("click", onBurger);
mobileMenu.addEventListener("click", onBurger);

function onBurger(e) {
  console.log(e.target);
  if (e.target.tagName === "NAV" || e.target.tagName === "UL") return;
  burger.classList.toggle("enableMenu");
  mobileMenu.classList.toggle("enableMenu");
}
