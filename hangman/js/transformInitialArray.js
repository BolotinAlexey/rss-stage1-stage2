import initialArray from "../assets/questionAnswerSet.js";

export default function transformInitialArray() {
  return initialArray
    .filter(
      (el) => !el[el.answer].includes(" ") && isNaN(parseInt(el[el.answer]))
    )
    .map((el) => ({
      question: el.question,
      answer: el[el.answer].toUpperCase(),
    }));
}
