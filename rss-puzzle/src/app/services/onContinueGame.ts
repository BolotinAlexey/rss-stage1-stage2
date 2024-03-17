import changeLine from "./changeLine";
import changeDataPuzzles from "./changeDataPuzzles";
import readDataSetResultBlock from "./readDataSetResultBlock";
import getElementsResultBlock from "./getElementsResultBlock";
import { COUNT_LINES_PER_RESULT_BLOCK } from "../constants/index";
import changeRound from "./changeRound";

export default function onContinueGame() {
  const { resultBlock } = getElementsResultBlock();

  const nextLine: number = Number(readDataSetResultBlock("currentLine"));

  resultBlock.style.paddingBottom = `${(resultBlock.clientHeight * (COUNT_LINES_PER_RESULT_BLOCK - 1 - nextLine)) / 10}px`;
  changeDataPuzzles();

  if (nextLine === 9) changeRound();
  else changeLine();
}
