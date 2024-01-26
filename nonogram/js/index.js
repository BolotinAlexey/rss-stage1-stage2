import { nonogram } from "../assets/nonograms/5x5/1.js";
import calculateClues from "./calculateClues.js";
import createElandClass from "./createElandClass.js";
import generateGrid from "./generateGrid.js";

const body = document.querySelector("body");

const main = createElandClass("main", ["page"]);
const grid = createElandClass("section", ["grid"]);
main.append(grid);
body.append(main);

function game(isRepeat) {
  const table = generateGrid({ ...calculateClues(nonogram), nonogram });
  table.addEventListener("click", onClickTable);
  table.addEventListener("contextmenu", onClickRightTable);
}

game();

// TODO: delete data-cross
function onClickTable(e) {
  e.target.dataset.fill = e.target.dataset.fill ? "" : true;
  e.target.classList.contains("fill")
    ? e.target.classList.remove("fill")
    : e.target.classList.add("fill");
  if (e.target.classList.contains("cross")) {
    e.target.dataset.cross = "";
    e.target.classList.remove("cross");
  }
}

function onClickRightTable(e) {
  e.preventDefault();
  console.log(e.target);
  e.target.dataset.cross = e.target.dataset.cross ? "" : true;
  e.target.classList.contains("cross")
    ? e.target.classList.remove("cross")
    : e.target.classList.add("cross");
  if (e.target.classList.contains("fill")) {
    e.target.dataset.fill = "";
    e.target.classList.remove("fill");
  }
}
