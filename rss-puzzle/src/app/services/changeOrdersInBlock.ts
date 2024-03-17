export default function changeOrdersInBlock(block: HTMLElement) {
  Object.values(block.childNodes).forEach((el: ChildNode, i: number) => {
    if (el instanceof HTMLElement) {
      // eslint-disable-next-line no-param-reassign
      el.style.order = i.toString();
    }
  });
}
