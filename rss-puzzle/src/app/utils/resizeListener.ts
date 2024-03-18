import { TABLET_BREAKPOINT_WIDTH } from "../constants/index";
import getElementsResultBlock from "../services/getElementsResultBlock";

export default function resizeListener(): void {
  const { dataBlock } = getElementsResultBlock();

  const ro = new ResizeObserver((entries) => {
    entries.forEach(() => {
      const dataPuzzles: NodeList = document.querySelectorAll(".puzzle-data");
      if (!dataPuzzles) throw new Error("Don't find 'puzzle-data'");
      Object.values(dataPuzzles).forEach((el: Node) => {
        if (!(el instanceof HTMLElement))
          throw new Error("puzzle-data isn't HTMLElement");
        const fakeEl = el;
        if (window.innerWidth < TABLET_BREAKPOINT_WIDTH) {
          fakeEl.style.fontSize = (Number(el.style.fontSize) / 1.3).toString();
          fakeEl.style.paddingLeft = (
            Number(el.style.paddingLeft) / 1.3
          ).toString();
          fakeEl.style.paddingRight = (
            Number(el.style.paddingRight) / 1.3
          ).toString();
        } else {
          fakeEl.style.fontSize = (Number(el.style.fontSize) * 1.3).toString();
          fakeEl.style.paddingLeft = (
            Number(el.style.paddingLeft) * 1.3
          ).toString();
          fakeEl.style.paddingRight = (
            Number(el.style.paddingRight) * 1.3
          ).toString();
        }
      });
    });
  });
  ro.observe(dataBlock);
}
