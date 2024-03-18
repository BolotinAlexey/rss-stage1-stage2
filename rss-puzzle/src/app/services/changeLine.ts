import level from "../assets/wordCollections/wordCollectionLevel1";
import createPuzzles from "../utils/createPuzzles";
import setHintInMarkup from "../utils/setHintInMarkup";
import getElementsBtns from "./getElementsBtns";
import getElementsResultBlock from "./getElementsResultBlock";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function changeLine() {
  const { resultBlock } = getElementsResultBlock();
  const currentLineAttr = readDataSetResultBlock("currentLine");
  if (!currentLineAttr)
    throw new Error("data attribute current-line don't exist in result block");
  const currentLine: number = Number(currentLineAttr) + 1;
  resultBlock.dataset.currentLine = Number(currentLine).toString();

  const currentRound: number = Number(readDataSetResultBlock("currentRound"));
  const { textExample, textExampleTranslate } =
    level.rounds[currentRound].words[currentLine];
  console.log(textExample);
  setHintInMarkup(textExampleTranslate);
  const imgWords: string[] = textExample.split(" ");
  createPuzzles(imgWords);
  const { continueBtn, checkBtn, autoCompleteBtn } = getElementsBtns();
  continueBtn.disabled = true;
  checkBtn.disabled = true;
  autoCompleteBtn.disabled = false;
}
