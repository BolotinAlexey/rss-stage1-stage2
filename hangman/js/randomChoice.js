import transformInitialArray from "./transformInitialArray.js";

export default function randomChoice() {
  const qaArr = transformInitialArray();
  const rndNumber = Math.floor(Math.random() * qaArr.length);
  window.localStorage.setItem(
    "questionArray",
    JSON.stringify(qaArr.filter((_, i) => i !== rndNumber))
  );
  return qaArr[rndNumber];
}
