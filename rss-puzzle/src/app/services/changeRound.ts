import level from "../assets/wordCollections/wordCollectionLevel1";
import runNewRound from "../utils/runNewRound";
import getElementsResultBlock from "./getElementsResultBlock";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function changeRound() {
  const currentRound: string = readDataSetResultBlock("currentRound");
  if (!currentRound)
    throw new Error("data attribute currentRound don't exist in result block");
  const currentLevel: string = readDataSetResultBlock("currentLevel");
  if (!currentLevel)
    throw new Error("data attribute currentRound don't exist in result block");
  // const levelNumber: number = Number(currentLevel);
  // import(`level${levelNumber}`)
  // if(Number(currentRound) + 1 >=  )
  const { resultBlock } = getElementsResultBlock();

  const nextRound: number = Number(currentLevel) + 1;
  if (nextRound < level.rounds.length) {
    resultBlock.dataset.currentRound = nextRound.toString();
    runNewRound(nextRound);
  }
}
