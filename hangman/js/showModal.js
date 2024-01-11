import createElandClass from "./createElandClass.js";
import { isRepeatHandler } from "./index.js";

const modal = document.querySelector(".modal");

export default function showModal(answer, guesses, isWin) {
  const backDrop = createElandClass("div", ["backdrop-modal"]);

  const bgColorClass = isWin ? "success" : "unsuccess";
  const modal = createElandClass("div", ["modal", bgColorClass]);
  backDrop.append(modal);
  document.querySelector("body").append(backDrop);

  const modalTitle = isWin
    ? createElandClass("h2", ["modal__title"], "You win!")
    : createElandClass("h2", ["modal__title"], "You loose!");
  const score = createElandClass(
    "p",
    ["modal__score"],
    `You have ${6 - guesses} incorrect answers.`
  );
  const answerNodePre = createElandClass(
    "p",
    ["modal__answer-pre"],
    `Correct answer is `
  );
  const answerNode = createElandClass("span", ["modal__answer"], answer);
  answerNodePre.append(answerNode);

  const repeatAnswer = createElandClass(
    "p",
    ["modal__repeat-answer"],
    "Would you repeat?"
  );
  answerNodePre.append(answerNode);

  const wrapBtns = createElandClass("div", ["modal__wrap-btns"]);
  const noBtn = createElandClass(
    "button",
    ["modal__btn", "modal__btn_no"],
    "❌ NO"
  );
  const yesBtn = createElandClass(
    "button",
    ["modal__btn", "modal__btn_yes"],
    `✅ YES`
  );

  wrapBtns.addEventListener("click", isRepeatHandler);
  wrapBtns.append(noBtn, yesBtn);

  modal.append(modalTitle, score, answerNodePre, repeatAnswer, wrapBtns);
}
