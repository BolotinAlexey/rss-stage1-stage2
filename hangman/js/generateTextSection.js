import createElandClass from "./createElandClass.js";
import generateChar from "./generateChar.js";

export default function generateTextSection(
  isRepeat,
  question,
  answer,
  guesses
) {
  const section = isRepeat
    ? document.querySelector(".section-text")
    : createElandClass("section", ["section", "section-text"]);
  if (isRepeat) section.innerHTML = "";
  const questionNode = createElandClass(
    "p",
    ["section-text__question"],
    question
  );
  const quessesNode = createElandClass(
    "p",
    ["section-text__guesses"],
    "Incorrect quesses: "
  );

  const quessesNodeNumber = createElandClass(
    "span",
    ["section-text__number", "section-text__number_fine"],
    `0 / 6`
  );

  const answerList = createElandClass("ul", ["answer__list"]);
  quessesNode.append(quessesNodeNumber);
  section.append(questionNode, answerList, quessesNode);

  const answerListStr = answer.split("").reduce(generateChar, "");
  answerList.insertAdjacentHTML("afterbegin", answerListStr);

  return section;
}
