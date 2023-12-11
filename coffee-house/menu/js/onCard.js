import countPrice from "./countPrice.js";
import getRefs from "./getRefs.js";
import showModal from "./showModal.js";

const { backdrop } = getRefs();
let onBackdropBind;

export default function onCard(e, itemsArray) {
  const li = e.target.closest("li");
  if (!li || e.target.name === "UL") return;
  // console.log(li.firstElementChild.firstElementChild.alt);
  const index = itemsArray.findIndex((el) => li.dataset.name === el.name);
  backdrop.classList.add("visible");
  backdrop.innerHTML = showModal({ ...itemsArray[index], index });
  onBackdropBind = onBackdrop.bind(null, itemsArray[index].price);
  backdrop.addEventListener("click", onBackdropBind);
}

function onBackdrop(start, e) {
  if (
    e.target === e.currentTarget ||
    e.target.classList.contains("modal__btn")
  ) {
    backdrop.removeEventListener("click", onBackdropBind);
    backdrop.classList.remove("visible");
  }
  if (e.target.tagName === "INPUT") {
    console.log(e.target);
    const price = countPrice(+start);
  }
}
