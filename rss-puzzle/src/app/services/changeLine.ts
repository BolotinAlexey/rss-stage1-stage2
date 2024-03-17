import level from "../assets/wordCollections/wordCollectionLevel1";
import createPuzzles from "../utils/createPuzzles";
import { getElementDocument } from "../utils/supFunctions";
import getElementsResultBlock from "./getElementsResultBlock";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function changeLine() {
  const { resultBlock } = getElementsResultBlock();
  const currentLineAttr = readDataSetResultBlock("currentLine");
  if (!currentLineAttr)
    throw new Error("data attribute current-line don't exist in result block");
  const currentLine: number = Number(currentLineAttr) + 1;
  resultBlock.dataset.currentLine = Number(currentLine).toString();
  // console.log(lines[Number(currentLine)]);

  // const currentRound = readDataSetResultBlock("round")
  const currentRound: number = Number(readDataSetResultBlock("currentRound"));
  const { textExample } = level.rounds[currentRound].words[currentLine];
  console.log(textExample);
  const imgWords: string[] = textExample.split(" ");
  createPuzzles(imgWords);
  const continueBtn: HTMLButtonElement = getElementDocument<HTMLButtonElement>(
    ".game__btn-continue",
  );
  continueBtn.disabled = true;
}
