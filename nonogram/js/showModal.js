import createElandClass from "./createElandClass.js";
import { onClickBackDrop } from "./index.js";

export default function showModal() {
  const name = document.querySelector(".colgroup").dataset.name;
  const complexity = document.querySelector(".colgroup").dataset.name;
  const time = document.querySelector(".table__unused-th").innerText;

  const backDrop = createElandClass("div", ["backdrop-modal"]);

  const modal = createElandClass("div", ["modal"]);
  backDrop.append(modal);
  document.querySelector("body").append(backDrop);

  const modalTitle = createElandClass("h2", ["modal__title"], "You win!");
  const score = createElandClass(
    "p",
    ["modal__score"],
    `Great! You have solved the nonogram "${name}" in ${time} seconds!`
  );

  const crossBtn = createElandClass("button", ["modal__btn"], "❌");

  backDrop.addEventListener("click", onClickBackDrop);

  modal.append(modalTitle, score, crossBtn);
}
