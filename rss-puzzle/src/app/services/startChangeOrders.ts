export default function startChangeOrders(block: HTMLElement) {
  Object.values(block.childNodes).forEach((el: ChildNode, i: number) => {
    if (el instanceof HTMLElement) {
      const fakeEl = el;
      fakeEl.style.order = i.toString();
    }
  });
}
