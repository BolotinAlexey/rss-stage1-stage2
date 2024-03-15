import { getElementDocument } from "../utils/supFunctions";
import changeOrdersInBlock from "./changeOrdersInBlock";

export default function moveToResultBlock(e: Event) {
  const dataBlock: HTMLElement = getElementDocument(".data-block");
  changeOrdersInBlock(dataBlock, e);
}
