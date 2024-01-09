import alphaArr from "../assets/alpha.js";
import createElandClass from "./createElandClass.js";
import generateKeyboard from "./generateKeyboard.js";
import generateTextSection from "./generateTextSection.js";
import randomChoice from "./randomChoice.js";

const body = document.querySelector("body");
function game(isRepeat) {
  restAlpha = [...alphaArr];
  const { question, answer } = randomChoice();
  console.log(question, answer);

  generateTextSection(body, isRepeat, question, answer);

  generateKeyboard(body, isRepeat);
}
let isGame = true;
let restAlpha;

window.addEventListener("keydown", onKeyDown);

function onKeyDown(e) {
  if (alphaArr.includes(e.code.substr(-1))) keyHandler(e.code.substr(-1));
}

export default function onKey({ target }) {
  let keyNode;
  if (target.tagName === "SPAN") keyNode = target.parentNode;
  else if (target.tagName === "LI") keyNode = target;
  else return;
  keyHandler(keyNode.dataset.key);
}

function keyHandler(key) {
  if (!restAlpha.includes(key) || !isGame) return;
  restAlpha = restAlpha.filter((el) => el !== key);
}
game();
