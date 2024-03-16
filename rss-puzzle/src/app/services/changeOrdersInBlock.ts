export default function changeOrdersInBlock(block: HTMLElement) {
  Object.values(block.childNodes).forEach((el: ChildNode, i: number) => {
    // eslint-disable-next-line no-param-reassign
    if (el instanceof HTMLElement) el.style.order = i.toString();
  });
}
