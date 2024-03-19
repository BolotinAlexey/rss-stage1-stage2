import { COUNT_LINES_PER_RESULT_BLOCK } from "../constants/index";
import getInputsElements from "../utils/getInputsElements";
import { getElementDocument } from "../utils/supFunctions";
import changeDataPuzzles from "./changeDataPuzzles";
import getElementsResultBlock from "./getElementsResultBlock";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function showWin() {
  const hintSentence = getElementDocument(".result-block__hint");
  const volume = getElementDocument(".button-volume");
  const { resultBlock } = getElementsResultBlock();
  const { lamp, sound } = getInputsElements();
  const nextLine: number = Number(readDataSetResultBlock("currentLine"));
  resultBlock.style.paddingBottom = `${(resultBlock.clientHeight * (COUNT_LINES_PER_RESULT_BLOCK - 1 - nextLine)) / 10}px`;
  changeDataPuzzles();

  if (!lamp.checked && !hintSentence.classList.contains("show-hint"))
    hintSentence.classList.add("show-hint");
  if (!sound.checked && !volume.classList.contains("show-hint"))
    volume.classList.add("show-hint");
}
