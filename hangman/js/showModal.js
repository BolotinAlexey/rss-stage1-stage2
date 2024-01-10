import createElandClass from "./createElandClass.js";

const modal = document.querySelector(".modal");

export default function showModal(answer, guesses, isWin) {
  const bgColorClass = isWin ? "success" : "unsuccess";
  const modal = createElandClass("div", ["modal", bgColorClass]);

  document.querySelector("body").append(modal);
  const modalTitle = isWin
    ? createElandClass("h2", ["modal__title"], "You win!")
    : createElandClass("h2", ["modal__title"], "You loose!");
  const score = createElandClass(
    "p",
    ["modal__score"],
    `You have ${6 - guesses} incorrect answers`
  );
  const answerNodePre = createElandClass(
    "p",
    ["modal__answer-pre"],
    `Correct answer is `
  );
  const answerNode = createElandClass("span", ["modal__answer"], answer);
  answerNodePre.append(answerNode);
  modal.append(modalTitle, score, answerNodePre);
}
