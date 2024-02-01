import createElandClass from "./createElandClass.js";
import { loadGame } from "./index.js";

export default function saveGame({
  table,
  numberFill,
  currentFill,
  currentNonogram,
}) {
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

  localStorage.setItem("nonogrameB", table.innerHTML);
  localStorage.setItem("numberFill", numberFill);
  localStorage.setItem("currentFill", currentFill);
}
