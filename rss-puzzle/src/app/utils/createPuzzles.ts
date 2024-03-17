/* eslint-disable no-param-reassign */
import { KOEF_EXT } from "../constants/index";
import getElementsResultBlock from "../services/getElementsResultBlock";
import createPuzzleElements from "./createPuzzleElements";

export default function createPuzzles(imgWords: string[]) {
  const { resultBlock, dataBlock } = getElementsResultBlock();
  const countChars = imgWords.length * 2 + imgWords.join("").length;
  const size = (dataBlock.clientWidth * KOEF_EXT) / countChars;

  // const puzzleList: NodeList = document.querySelectorAll(".puzzle-data");
  const line = createPuzzleElements(imgWords, dataBlock);

  const paddingY = (resultBlock.clientHeight / 10 - line[0].clientHeight) / 2;
  const totalLength = line.reduce((a: number, el: HTMLElement) => {
    return a + el.clientWidth;
  }, 0);
  const coef = dataBlock.clientWidth / totalLength;

  line.forEach((el: HTMLElement) => {
    el.style.padding = `${paddingY}px ${size * coef - 1}px`;
    el.style.fontSize = `${size * coef}px`;
  }, []);
}
