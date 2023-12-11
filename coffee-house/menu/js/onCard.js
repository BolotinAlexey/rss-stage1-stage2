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
}
