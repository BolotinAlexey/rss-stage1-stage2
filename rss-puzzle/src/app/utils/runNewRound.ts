import level from "../assets/wordCollections/wordCollectionLevel1";
import { COUNT_LINES_PER_RESULT_BLOCK } from "../constants/index";
import getElementsResultBlock from "../services/getElementsResultBlock";
import createLines from "./createLines";
import createPuzzles from "./createPuzzles";

export default function runNewRound(roundNum: number) {
  const { imageSrc } = level.rounds[roundNum].levelData;

  const { resultBlock } = getElementsResultBlock();
  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample } = level.rounds[roundNum].words[0];
  console.log(textExample);

  const imgWords: string[] = textExample.split(" ");
  resultBlock.innerHTML = "";
  createLines(resultBlock);
  createPuzzles(imgWords);
  resultBlock.dataset.currentLine = "0";
  resultBlock.style.paddingBottom = `${resultBlock.clientHeight}px`;
}
