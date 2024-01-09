import alphaArr from "../assets/alpha.js";
import generateKeyboard from "./generateKeyboard.js";
import transformInitialArray from "./transformInitialArray.js";

const qaArr = transformInitialArray();
generateKeyboard();

console.log(alphaArr);
