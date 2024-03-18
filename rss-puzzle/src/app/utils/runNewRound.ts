import level from "../assets/wordCollections/wordCollectionLevel1";
import getElementsResultBlock from "../services/getElementsResultBlock";
import createLines from "./createLines";
import createPuzzles from "./createPuzzles";
import setHintInMarkup from "./setHintInMarkup";

export default function runNewRound(roundNum: number) {
  const { imageSrc } = level.rounds[roundNum].levelData;

  const { resultBlock } = getElementsResultBlock();
  resultBlock.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${imageSrc}")`;
  const { textExample, textExampleTranslate } = level.rounds[roundNum].words[0];
  console.log(textExample);
  setHintInMarkup(textExampleTranslate);
  const imgWords: string[] = textExample.split(" ");
  resultBlock.innerHTML = "";
  createLines(resultBlock);
  createPuzzles(imgWords);
  resultBlock.dataset.currentLine = "0";
  resultBlock.style.paddingBottom = `${resultBlock.clientHeight}px`;
}
