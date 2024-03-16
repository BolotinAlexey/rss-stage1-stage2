import changeLine from "./changeLine";
import changeWord from "./changeWord";
import getElementsResultBlock from "./getElementsResultBlock";

export default function continueGame(currentLine: string) {
  const { resultBlock } = getElementsResultBlock();
  if (currentLine === "8") changeWord(resultBlock);
  else changeLine(resultBlock);
}
