import { listNonograms } from "../assets/listNonograms.js";
import { runner } from "../assets/nonograms/10x10.js";
import calculateClues from "./calculateClues.js";
import checkWin from "./checkWin.js";
import countFill from "./countFill.js";
import createElandClass from "./createElandClass.js";
import generateGrid from "./generateGrid.js";
import resetNonogram from "./resetNonogram.js";
import showAnswer from "./showAnswer.js";
import showModal from "./showModal.js";

const body = document.querySelector("body");
console.log(listNonograms);
// for (const list in listNonograms) {
//   console.log(list.key);
// }
const main = createElandClass("main", ["page"]);
const grid = createElandClass("section", ["grid"]);
main.append(grid);
body.append(main);

let isWin, currentFill, numberFill, nonogram;

function game(nonogram) {
  isWin = false;
  const { leftTotal, topTotal } = calculateClues(nonogram);
  const table = generateGrid({ leftTotal, topTotal, nonogram });

  numberFill = countFill(topTotal);
  currentFill = 0;

  table.addEventListener("click", onClickTable);
  table.addEventListener("contextmenu", onClickRightTable);

  const answerBtn = createElandClass("button", ["answer-btn"], "Show answer");
  answerBtn.addEventListener("click", showAnswer);
  const resetBtn = createElandClass("button", ["reset-btn"], "Reset");
  resetBtn.addEventListener("click", () => {
    resetNonogram();
    currentFill = 0;
  });

  main.append(answerBtn, resetBtn);
}

game(runner);

// TODO: delete data-cross
function onClickTable(e) {
  if (!e.target.dataset.bool) return;
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
  if (isWin) {
    showModal();
  }
}

function onClickRightTable(e) {
  e.preventDefault();
  if (!e.target.dataset.bool) return;
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
  if (isWin) {
    showModal();
  }
}

export function onClickBackDrop(e) {
  if (
    !e.target.classList.contains("backdrop-modal") &&
    !e.target.classList.contains("modal__btn")
  )
    return;
  document.querySelector(".backdrop-modal").innerHTML = "";
}

// function resetNonogram() {
//   document.querySelector(".grid").innerHTML = "";
//   game(nonogram);
// }
