import calculateClues from "./calculateClues.js";
import checkWin from "./checkWin.js";
import countFill from "./countFill.js";
import createAccordion from "./createAccordion.js";
import createElandClass from "./createElandClass.js";
import generateGrid from "./generateGrid.js";
import onResize from "./onResize.js";
import randomGame from "./randomGame.js";
import resetNonogram from "./resetNonogram.js";
import saveGame from "./saveGame.js";
import showAnswer from "./showAnswer.js";
import showModal from "./showModal.js";

const main = createElandClass("main", ["page"]);
const title = createElandClass("h1", ["title"], "Nonogram");
const grid = createElandClass("section", ["grid"]);

grid.append(title);
main.append(grid);
document.querySelector("body").append(main);

let isWin, currentFill, numberFill, table, currentNonogram, time;

game(randomGame(null));

const answerBtn = createElandClass(
  "button",
  ["answer-btn", "btn"],
  "Show answer"
);
answerBtn.addEventListener("click", () => {
  table.removeEventListener("click", onClickTable);
  table.removeEventListener("click", onClickRightTable);
  showAnswer();
});

const resetBtn = createElandClass("button", ["reset-btn", "btn"], "Reset");
resetBtn.addEventListener("click", () => {
  resetNonogram();
  currentFill = 0;
});

const randomBtn = createElandClass(
  "button",
  ["random-btn", "btn"],
  "Randome game"
);
randomBtn.addEventListener("click", () => {
  game(randomGame(currentNonogram));
});

const saveBtn = createElandClass("button", ["save-btn", "btn"], "Save game");
saveBtn.addEventListener("click", () =>
  saveGame({ table, numberFill, currentFill, currentNonogram })
);

const buttonsWrap = createElandClass("section", ["section", "btns"]);

buttonsWrap.append(answerBtn, resetBtn, randomBtn, saveBtn);

if (localStorage.getItem("nonogrameB")) {
  const loadBtn = createElandClass("button", ["load-btn", "btn"], "Load game");
  loadBtn.addEventListener("click", loadGame);
  buttonsWrap.append(loadBtn);
}

const infoWrap = createElandClass("div", ["info-wrap"]);
main.append(infoWrap);
infoWrap.append(buttonsWrap);

createAccordion(infoWrap).addEventListener("click", accordionHandler);

window.addEventListener("resize", onResize);

async function game({ folder, nonogramName }) {
  currentNonogram = { folder, nonogramName };
  const module = await import(`../assets/nonograms/${folder}.js`);
  const nonogram = module[nonogramName];
  isWin = false;
  const { leftTotal, topTotal } = calculateClues(nonogram);

  if (document.querySelector(".table"))
    document.querySelector(".table").remove();

  table = createElandClass("table", ["table"]);
  grid.append(table);
  generateGrid({ leftTotal, topTotal, nonogram, nonogramName });

  numberFill = countFill(topTotal);
  currentFill = 0;

  table.addEventListener("click", onClickTable);
  table.addEventListener("contextmenu", onClickRightTable);
}

function onClickTable(e) {
  if (!e.target.dataset.bool) return;
  e.target.dataset.fill = e.target.dataset.fill === "1" ? "0" : "1";
  if (e.target.classList.contains("fill")) {
    e.target.classList.remove("fill");
    currentFill -= 1;
  } else {
    e.target.classList.add("fill");
    currentFill += 1;
  }
  if (e.target.classList.contains("cross")) {
    e.target.classList.remove("cross");
  }

  isWin = currentFill === numberFill && checkWin();
  if (isWin) {
    showModal(time);
  }
}

function onClickRightTable(e) {
  e.preventDefault();
  if (!e.target.dataset.bool) return;
  e.target.classList.toggle("cross");
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
  document.querySelector(".backdrop-modal").remove();
  table.removeEventListener("click", onClickTable);
  table.removeEventListener("click", onClickRightTable);
}

function accordionHandler(e) {
  // click 5x5, 10x10 or 15x15
  if (e.target.classList.contains("complexity__text")) {
    document.querySelectorAll(".complexity__list").forEach((el) => {
      if (el === e.target.parentNode.childNodes[1]) return;
      if (el.classList.contains("show")) el.classList.remove("show");
    });
    e.target.parentNode.childNodes[1].classList.toggle("show");
  }

  // click nonograme name
  if (e.target.classList.contains("complexity__item")) {
    document.querySelectorAll(".complexity__list").forEach((el) => {
      if (el.classList.contains("show")) el.classList.remove("show");
    });
    const folder = e.target.dataset.folder;

    game({
      folder,
      nonogramName: e.target.textContent,
    });
  }
}

export function loadGame() {
  table.innerHTML = localStorage.getItem("nonogrameB");
  numberFill = +localStorage.getItem("numberFill");
  currentFill = +localStorage.getItem("currentFill");
  currentNonogram.nonogramName = document.querySelector(".colgroup");
}
