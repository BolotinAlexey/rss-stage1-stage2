import alphaArr from "../assets/alpha.js";
import initialArray from "../assets/questionAnswerSet.js";

export default function transformInitialArray() {
  let localStorageQuestionArr = JSON.parse(
    window.localStorage.getItem("questionArray")
  );

  return localStorageQuestionArr
    ? localStorageQuestionArr
    : initialArray
        .filter((el) =>
          el[el.answer]
            .toUpperCase()
            .split("")
            .every((char) => alphaArr.includes(char))
        )
        .map((el) => ({
          answer: el[el.answer].toUpperCase(),
          question: el.question,
        }))
        .reduce((a, b) => {
          if (a.find(({ answer }) => answer === b.answer)) return a;
          return [...a, b];
        }, []);
}
