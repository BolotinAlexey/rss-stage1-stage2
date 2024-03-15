export default function changeOrdersInBlock(block: HTMLElement, e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLElement)) return;
  const lastIndex: number = block.childNodes.length;

  Object.values(block.childNodes).forEach((el: ChildNode, i: number) => {
    // eslint-disable-next-line no-param-reassign
    if (el instanceof HTMLElement) el.style.order = i.toString();
  });
  target.style.order = lastIndex.toString();
  block.append(target);
}
