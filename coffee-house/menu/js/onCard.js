import getRefs from "./getRefs.js";
import showModal from "./showModal.js";

const { backdrop } = getRefs();

export default function onCard(e, itemsArray) {
  const li = e.target.closest("li");
  if (!li || e.target.name === "UL") return;
  // console.log(li.firstElementChild.firstElementChild.alt);
  const index = itemsArray.findIndex((el) => li.dataset.name === el.name);
  backdrop.classList.add("visible");
  backdrop.innerHTML = showModal({ ...itemsArray[index], index });
  backdrop.addEventListener("click", onBackdrop);
}

function onBackdrop(e) {
  console.log(e.target);
  if (
    e.target === e.currentTarget ||
    e.target.classList.contains("modal__btn")
  ) {
    backdrop.removeEventListener("click", onBackdrop);
    backdrop.classList.remove("visible");
  }
}
