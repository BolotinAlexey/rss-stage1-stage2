import changeLine from "./changeLine";
import changeDataPuzzles from "./changeDataPuzzles";
import readDataSetResultBlock from "./readDataSetResultBlock";
import getElementsResultBlock from "./getElementsResultBlock";
import { COUNT_LINES_PER_RESULT_BLOCK } from "../constants/index";
import changeRound from "./changeRound";
import getElementsBtns from "./getElementsBtns";

export default function onContinueGame() {
  const { resultBlock } = getElementsResultBlock();
  const { continueBtn, checkBtn } = getElementsBtns();
  continueBtn.disabled = true;
  checkBtn.disabled = true;

  const nextLine: number = Number(readDataSetResultBlock("currentLine"));
  resultBlock.style.paddingBottom = `${(resultBlock.clientHeight * (COUNT_LINES_PER_RESULT_BLOCK - 1 - nextLine)) / COUNT_LINES_PER_RESULT_BLOCK}px`;
  changeDataPuzzles();

  if (nextLine === 9) changeRound();
  else changeLine();
}
