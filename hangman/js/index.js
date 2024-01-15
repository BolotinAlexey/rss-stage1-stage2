import alphaArr from "../assets/alpha.js";
import createElandClass from "./createElandClass.js";
import createGallows from "./createGallows.js";
import gameOver from "./gameOver.js";
import generateKeyboard from "./generateKeyboard.js";
import generateTextSection from "./generateTextSection.js";
import randomChoice from "./randomChoice.js";
import redirectTolinkedIn from "./redirectTolinkedIn.js";
import showGuessesNumber from "./showGuessesNumber.js";

const parts = [
  "head",
  "trunk",
  "left-hand",
  "right-hand",
  "left-leg",
  "right-leg",
];
const page = createElandClass("main", ["page"]);
document.querySelector("body").append(page);

let answer, question, restAlpha, guesses;

function game(isRepeat) {
  window.addEventListener("keydown", onKeyDown);

  restAlpha = [...alphaArr];
  const text = randomChoice();
  question = text.question;
  answer = text.answer;
  guesses = 6;
  console.log("Answer: " + answer);

  createGallows(isRepeat, parts);
  page.append(generateTextSection(isRepeat, question, answer));
  generateKeyboard(isRepeat);
}
let isGame = true;

function onKeyDown(e) {
  if (restAlpha.includes(e.code.substr(-1))) keyHandler(e.code.substr(-1));
}

export default function onKey({ target }) {
  let keyNode;
  if (target.tagName === "BUTTON") keyNode = target.parentNode;
  else if (target.tagName === "LI") keyNode = target;
  else return;
  keyHandler(keyNode.dataset.key);
}

// !todo !restAlpha.includes(key) remove
function keyHandler(key) {
  if (!restAlpha.includes(key) || !isGame) return;
  document.querySelectorAll(".keyboard__item").forEach((el) => {
    if (el.dataset.key === key) {
      el.classList.add("checked");
      el.children[0].disabled = true;
    }
  });
  restAlpha = restAlpha.filter((el) => el !== key);
  if (answer.split("").includes(key)) guess(key);
  else notGuess();
}

function guess(key) {
  const answerNodeList = document.querySelectorAll(".answer__item");
  answerNodeList.forEach((el) => {
    if (el.dataset.char === key) {
      el.classList.add("choice");
    }
  });
  if ([...answerNodeList].every((el) => el.classList.contains("choice"))) {
    window.removeEventListener("keydown", onKeyDown);
    gameOver(answer, guesses, true);
  }
}

function notGuess() {
  document
    .querySelector(`.body__part_${parts[[6 - guesses]]}`)
    .classList.add("visible");
  showGuessesNumber(--guesses);
  document.querySelectorAll(".body__part")[6 - guesses];
  if (!guesses) {
    window.removeEventListener("keydown", onKeyDown);
    gameOver(answer, guesses);
  }
}

export function isRepeatHandler(e) {
  if (e.target.tagName !== "BUTTON") return;
  e.currentTarget.parentNode.parentNode.remove();
  if (e.target.classList.contains("modal__btn_no")) redirectTolinkedIn();
  else {
    game(true);
  }
}
game();
