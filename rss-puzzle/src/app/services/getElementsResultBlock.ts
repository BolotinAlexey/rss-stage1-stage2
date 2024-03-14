import { getElementDocument } from "../utils/supFunctions";

export default function getElementsResultBlock() {
  const resultBlock: HTMLElement = getElementDocument(".result-block");
  const dataBlock: HTMLElement = getElementDocument(".data-block");
  // const resultImg: HTMLImageElement = getElementDocument(".result__img");
  return { resultBlock, dataBlock };
}
