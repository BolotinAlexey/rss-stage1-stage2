import createElandClass from "./createElandClass.js";
import { loadGame } from "./index.js";

export default function saveGame({ table, numberFill, currentFill }) {
  if (
    !localStorage.getItem("nonograme") &&
    !localStorage.getItem("nonogrameB")
  ) {
    const loadBtn = createElandClass(
      "button",
      ["load-btn", "btn"],
      "Load game"
    );
    loadBtn.addEventListener("click", loadGame);
    document.querySelector(".btns").append(loadBtn);
  }

  localStorage.setItem(
    "nonogrameBolotin",
    JSON.stringify({
      nonograme: table.innerHTML,
      numberFill,
      currentFill,
      time: document.querySelector(".table__unused-th").innerText,
    })
  );
}
