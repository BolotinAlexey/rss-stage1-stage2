import alphaArr from "../assets/alpha.js";
import gameOver from "./gameOver.js";
import generateKeyboard from "./generateKeyboard.js";
import generateTextSection from "./generateTextSection.js";
import randomChoice from "./randomChoice.js";
import showGuessesNumber from "./showGuessesNumber.js";

const body = document.querySelector("body");
let answer, question, restAlpha, guesses;
function game(isRepeat) {
  restAlpha = [...alphaArr];
  const text = randomChoice();
  question = text.question;
  answer = text.answer;
  guesses = 6;
  console.log(question, answer);

  generateTextSection(body, isRepeat, question, answer);

  generateKeyboard(body, isRepeat);
}
let isGame = true;

window.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
  if (restAlpha.includes(e.code.substr(-1))) keyHandler(e.code.substr(-1));
}

export default function onKey({ target }) {
  let keyNode;
  console.log(target);
  if (target.tagName === "BUTTON") keyNode = target.parentNode;
  else if (target.tagName === "LI") keyNode = target;
  else return;
  keyHandler(keyNode.dataset.key);
}

// !todo !restAlpha.includes(key) remove
function keyHandler(key) {
  if (!restAlpha.includes(key) || !isGame) return;
  restAlpha = restAlpha.filter((el) => el !== key);
  if (answer.split("").includes(key)) guess(key);
  else notGuess(key);
}

function guess(key) {
  const answerNodeList = document.querySelectorAll(".answer__item");
  const keyboardNodeList = document.querySelectorAll(".keyboard__item");
  answerNodeList.forEach((el) => {
    if (el.dataset.char === key) {
      el.classList.add("choice");
    }
  });
  keyboardNodeList.forEach((el) => {
    if (el.dataset.key === key) {
      el.classList.add("checked");
      el.children[0].disabled = true;
    }
  });
}

function notGuess(key) {
  console.log(guesses);
  showGuessesNumber(--guesses);
  if (!guesses) {
    console.log("gameOver");
    gameOver(answer, guesses);
  }
}
game();
