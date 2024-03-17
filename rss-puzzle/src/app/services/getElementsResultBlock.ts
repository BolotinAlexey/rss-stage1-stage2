import { getElementDocument } from "../utils/supFunctions";

export default function getElementsResultBlock() {
  const resultBlock: HTMLElement = getElementDocument(".result-block");
  const dataBlock: HTMLElement = getElementDocument(".data-block");
  return { resultBlock, dataBlock };
}
