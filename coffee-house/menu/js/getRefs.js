export default function getRefs() {
  return {
    tab: document.querySelector(".tab"),
    tabInputs: document.querySelectorAll(".tab__input"),
    cards: document.querySelector(".cards"),
    more: document.querySelector(".more"),
    backdrop: document.querySelector(".backdrop"),
  };
}
