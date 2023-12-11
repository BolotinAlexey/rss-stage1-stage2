import getRefs from "./getRefs.js";

// const { sizes, additives } = getRefs();

export default function countPrice(start) {
  const sizes = document.querySelectorAll(".size__input");
  const additives = document.querySelectorAll(".additives__input");
  const priceElement = document.querySelector(".modal__price-number");
  const price = [...sizes].reduce((a, b) => {
    if (b.checked) return a + +b.dataset.add;
    return a;
  }, start);
  priceElement.innerText = parseFloat(price).toFixed(2).toString();
}
