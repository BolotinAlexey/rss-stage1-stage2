import getRefs from "./getRefs.js";

const { burger, mobileMenu, body } = getRefs();
burger.addEventListener("click", onBurger);
mobileMenu.addEventListener("click", onBurger);
window.addEventListener("resize", () => {
  if (body.clientWidth > 768) resetModal();
});

function onBurger(e) {
  if (e.target.tagName === "NAV" || e.target.tagName === "UL") return;
  burger.classList.toggle("enableMenu");
  mobileMenu.classList.toggle("enableMenu");
  body.classList.toggle("enableMenu");
  if (burger.classList.contains("enableMenu")) {
    window.scrollTo(0, 0);
  }
}
function resetModal() {
  if (burger.classList.contains("enableMenu")) {
    burger.classList.remove("enableMenu");
    mobileMenu.classList.remove("enableMenu");
    body.classList.remove("enableMenu");
  }
}
