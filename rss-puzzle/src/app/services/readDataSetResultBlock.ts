import getElementsResultBlock from "./getElementsResultBlock";

export default function readDataSetResultBlock(attr: string): string {
  const { resultBlock } = getElementsResultBlock();
  const data: string | undefined = resultBlock.dataset[attr];
  return data || "";
}
