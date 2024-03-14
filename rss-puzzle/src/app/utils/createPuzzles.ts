/* eslint-disable no-param-reassign */
import { createElement } from "./supFunctions";

const BORDER = 1;

export default function createPuzzles(
  textExample: string,
  dataBlock: HTMLElement,
  resultBlock: HTMLElement,
) {
  const imgWords = textExample.split(" ");
  const line = imgWords.reduce((a: HTMLElement[], word: string, i: number) => {
    const node = createElement("div", ["puzzle", "puzzle-data"], word);
    node.dataset.id = i.toString();
    node.dataset.word = word;
    return [...a, node];
  }, []);

  dataBlock.append(...line);

  const totalLength = line.reduce((a: number, el: HTMLElement) => {
    el.dataset.width = el.clientWidth.toString();
    el.dataset.height = el.clientHeight.toString();
    return a + el.clientWidth;
  }, 0);

  const paddingX = (dataBlock.clientWidth - totalLength) / (2 * line.length);
  const paddingY = (resultBlock.clientHeight / 10 - line[0].clientHeight) / 2;
  line.forEach((el) => {
    el.style.padding = `${Math.floor(paddingY)}px ${Math.floor(paddingX) - BORDER}px`;
    // el.style.paddingRight = `${Math.floor(paddingX) - BORDER}px`;
  });
  console.log(paddingY);
}
