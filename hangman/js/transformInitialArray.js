import alphaArr from "../assets/alpha.js";
import initialArray from "../assets/questionAnswerSet.js";

export default function transformInitialArray() {
  let localStorageQuestionArr = JSON.parse(
    window.localStorage.getItem("questionArray")
  );

  return localStorageQuestionArr
    ? localStorageQuestionArr
    : initialArray
        .filter(
          (el) =>
            !el[el.answer].includes(" ") &&
            isNaN(parseInt(el[el.answer])) &&
            el[el.answer]
              .toUpperCase()
              .split("")
              .every((char) => alphaArr.includes(char))
        )
        .map((el) => ({
          question: el.question,
          answer: el[el.answer].toUpperCase(),
        }));
}
