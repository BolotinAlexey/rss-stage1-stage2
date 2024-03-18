import { getElementDocument } from "../utils/supFunctions";
import changeLine from "./changeLine";
import changeRound from "./changeRound";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function onContinueGame() {
  const nextLine: number = Number(readDataSetResultBlock("currentLine"));
  const hintSentence = getElementDocument(".result-block__hint");

  if (hintSentence.classList.contains("show-hint"))
    hintSentence.classList.remove("show-hint");

  if (nextLine === 9) changeRound();
  else changeLine();
}
