import changeLine from "./changeLine";
import changeDataPuzzles from "./changeDataPuzzles";
import changeWord from "./changeWord";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function onContinueGame() {
  changeDataPuzzles();
  const currentLine: string = readDataSetResultBlock("currentLine");
  console.log(currentLine);
  if (currentLine === "9") changeWord();
  else changeLine();
}
