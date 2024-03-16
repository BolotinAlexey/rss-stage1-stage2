import { KOEF_EXT } from "../constants/index";
import randomOrder from "./randomOrder";
import { createElement } from "./supFunctions";

export default function createPuzzleElements(
  imgWords: string[],
  dataBlock: HTMLElement,
) {
  const newOrder: number[] = randomOrder(imgWords.length);
  const countChars = imgWords.length * 2 + imgWords.join("").length;
  const size = (dataBlock.clientWidth * KOEF_EXT) / countChars;

  const line: HTMLElement[] = imgWords.reduce(
    (a: HTMLElement[], word: string, i: number) => {
      const node = createElement("div", ["puzzle", "puzzle-data"], word);
      node.dataset.id = i.toString();
      node.dataset.word = word;
      node.style.order = newOrder[i].toString();
      node.style.paddingLeft = `${size}px`;
      node.style.paddingRight = `${size}px`;
      node.style.fontSize = `${size}px`;
      return [...a, node];
    },
    [],
  );
  dataBlock.append(...line);
  return line;
}
