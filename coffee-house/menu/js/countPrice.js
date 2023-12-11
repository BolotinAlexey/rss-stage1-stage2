export default function countPrice(start) {
  const sizes = document.querySelectorAll(".size__input");
  const additives = document.querySelectorAll(".additives__input");
  const priceElement = document.querySelector(".modal__price-number");
  const priceSizes = [...sizes].reduce((a, b) => {
    if (b.checked) return a + +b.dataset.add;
    return a;
  }, start);
  const price = [...additives].reduce((a, b) => {
    if (b.checked) return a + +b.dataset.add;
    return a;
  }, priceSizes);
  priceElement.innerText = `$${parseFloat(price).toFixed(2)}`;
}
