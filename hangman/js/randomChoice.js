import transformInitialArray from "./transformInitialArray.js";

export default function randomChoice() {
  const qaArr = transformInitialArray();
  const rndNumber = Math.floor(Math.random() * qaArr.length);
  return qaArr[rndNumber];
}
