import isPuzzle from "../utils/isPuzzle";
import { getElementDocument } from "../utils/supFunctions";
import changeOrdersInBlock from "./changeOrdersInBlock";

export default function moveToResultBlock(e: Event) {
  if (!isPuzzle(e.target)) return;
  const dataBlock: HTMLElement = getElementDocument(".data-block");
  changeOrdersInBlock(dataBlock, e);
}
