import Button from "../components/button/button";
import Page from "../components/page/page";
import { createElement } from "../services/supFunctions";
import StoreCars from "../store/cars";
import StoreTrack from "../store/track";

export default function createPrevNext(context: Page) {
  const fakePage: Page = context;

  const [prev, next] = ["prev", "next"].map((action: string, i: number) => {
    const btn = new Button(action, action, () => {
      if (action === "prev" && context.num === 1) return;
      fakePage.setNum = !(i % 2) ? fakePage.getNum - 1 : fakePage.getNum + 1;
      StoreTrack.setIsRace = false;
      StoreCars.controller.abort();
      StoreCars.controller = new AbortController();
    });
    return btn;
  });

  const btnWrap = createElement("div", ["btns-wrap"]);
  btnWrap.append(prev.getHTMLElement(), next.getHTMLElement());
  context.getHTMLElement().append(btnWrap);
}
