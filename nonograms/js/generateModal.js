import createElandClass from "./createElandClass.js";
import { onClickBackDrop } from "./index.js";

export default function generateModal(title, contentModal) {
  const backDrop = createElandClass("div", ["backdrop-modal"]);

  const modal = createElandClass("div", ["modal"]);
  backDrop.append(modal);
  document.querySelector("body").append(backDrop);

  const crossBtn = createElandClass("button", ["modal__btn"], "❌");

  backDrop.addEventListener("click", onClickBackDrop);

  const modalTitle = createElandClass("h2", ["modal__title"], title);

  modal.append(modalTitle, contentModal, crossBtn);
}
