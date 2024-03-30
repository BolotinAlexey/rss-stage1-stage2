import Button from "../components/button/button";
// eslint-disable-next-line import/no-cycle
import Page from "../components/page/page";
import { createElement } from "../services/supFunctions";

export default function createPrevNext(context: Page) {
  const fakePage: Page = context;

  const [prev, next] = ["prev", "next"].map((action: string, i: number) => {
    const btn = new Button(action, action, () => {
      if (action === "prev" && context.num === 1) return;
      fakePage.setNum = !(i % 2) ? fakePage.getNum - 1 : fakePage.getNum + 1;
    });
    return btn;
  });

  const btnWrap = createElement("div", ["btns-wrap"]);
  btnWrap.append(prev.getHTMLElement(), next.getHTMLElement());
  context.getHTMLElement().append(btnWrap);
}
