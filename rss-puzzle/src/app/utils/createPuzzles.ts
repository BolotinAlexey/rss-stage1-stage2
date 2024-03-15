import createPuzzleElements from "./createPuzzleElementsts";
import { getElementDocument } from "./supFunctions";

const KOEF_EXT = 1.3;

export default function createPuzzles(
  imgWords: string[],
  dataBlock: HTMLElement,
  resultBlock: HTMLElement,
) {
  // const newOrder: number[] = randomOrder(imgWords.length);
  const countChars = imgWords.length * 2 + imgWords.join("").length;
  const size = (dataBlock.clientWidth * KOEF_EXT) / countChars;
  const line = createPuzzleElements(imgWords, dataBlock);

  const paddingY = (resultBlock.clientHeight / 10 - line[0].clientHeight) / 2;
  const totalLength = line.reduce((a: number, el: HTMLElement) => {
    return a + el.clientWidth;
  }, 0);
  const coef = dataBlock.clientWidth / totalLength;

  imgWords.forEach((word: string) => {
    const el = getElementDocument(`[data-word="${word}"]`);
    // el.style.order = newOrder[i].toString();
    el.style.padding = `${paddingY}px ${size * coef - 1}px`;
    el.style.fontSize = `${size * coef}px`;
  }, []);
  // const totalLengt2 = line.reduce((a: number, el: HTMLElement) => {
  //   return a + el.clientWidth;
  // }, 0);
  // console.log(coef,totalLengt2,dataBlock.clientWidth);
}
