import { nonogram } from "../assets/nonograms/5x5/1.js";
import calculateClues from "./calculateClues.js";
import checkWin from "./checkWin.js";
import countFill from "./countFill.js";
import createElandClass from "./createElandClass.js";
import generateGrid from "./generateGrid.js";

const body = document.querySelector("body");

const main = createElandClass("main", ["page"]);
const grid = createElandClass("section", ["grid"]);
main.append(grid);
body.append(main);

let isWin, currentFill, numberFill;
function game(isRepeat) {
  isWin = false;
  const { leftTotal, topTotal } = calculateClues(nonogram);
  const table = generateGrid({ leftTotal, topTotal, nonogram });

  numberFill = countFill(topTotal);
  currentFill = 0;

  table.addEventListener("click", onClickTable);
  table.addEventListener("contextmenu", onClickRightTable);
}

game();

// TODO: delete data-cross
function onClickTable(e) {
  e.target.dataset.fill = e.target.dataset.fill === "1" ? "0" : "1";
  if (e.target.classList.contains("fill")) {
    e.target.classList.remove("fill");
    currentFill -= 1;
    console.log(currentFill);
  } else {
    e.target.classList.add("fill");
    currentFill += 1;
    console.log(currentFill);
  }
  if (e.target.classList.contains("cross")) {
    e.target.dataset.cross = "";
    e.target.classList.remove("cross");
  }

  isWin = currentFill === numberFill && checkWin();
  console.log(isWin);
}

function onClickRightTable(e) {
  e.preventDefault();
  console.log(e.target);
  e.target.dataset.cross = e.target.dataset.cross ? "" : 1;
  e.target.classList.contains("cross")
    ? e.target.classList.remove("cross")
    : e.target.classList.add("cross");
  if (e.target.classList.contains("fill")) {
    currentFill -= 1;
    e.target.dataset.fill = "0";
    e.target.classList.remove("fill");
  }

  isWin = currentFill === numberFill && checkWin();
  console.log(isWin);
}
