import createElandClass from "./createElandClass.js";
import { loadGame } from "./index.js";

export default function saveGame({ table, numberFill, currentFill }) {
  if (!localStorage.getItem("nonogrameBolotin")) {
    const loadBtn = createElandClass(
      "button",
      ["load-btn", "btn"],
      "Continue last game"
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
    })
  );
}
