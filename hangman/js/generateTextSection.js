import createElandClass from "./createElandClass.js";
import generateChar from "./generateChar.js";

export default function generateTextSection(body, isRepeat, question, answer) {
  const section = isRepeat
    ? document.querySelector(".section-text")
    : createElandClass("section", ["section", "section-text"]);
  if (isRepeat) section.innerHTML = "";
  const questionNode = createElandClass(
    "p",
    ["section-text__question"],
    question
  );

  const answerList = createElandClass("ul", ["answer__list"]);
  body.append(section);
  section.append(questionNode, answerList);

  const answerListStr = answer.split("").reduce(generateChar, "");
  answerList.insertAdjacentHTML("afterbegin", answerListStr);
}
