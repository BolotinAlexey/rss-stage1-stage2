import createElandClass from "./createElandClass.js";
import generateModal from "./generateModal.js";

const SECOND_IN_MINUTE = 60;

export default function showWinModal() {
  const name = document.querySelector(".colgroup").dataset.name;
  const [min, sec] = document
    .querySelector(".table__unused-th")
    .innerText.split(":");
  const time = +sec + min * SECOND_IN_MINUTE;

  const contentModal = createElandClass(
    "p",
    ["modal__score"],
    `Great! You have solved the nonogram "${name}" in ${time} seconds!`
  );

  generateModal("You win!", contentModal);
}
