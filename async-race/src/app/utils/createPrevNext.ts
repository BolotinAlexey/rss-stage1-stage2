import Button from "../components/button/button";
import Page from "../components/page/page";
import { createElement } from "../services/supFunctions";

export default function createPrevNext(context: Page) {
  const prev = new Button("prev", "prev", () => {
    const fakePage: Page = context;
    fakePage.setNum = fakePage.getNum - 1;
  });

  const next = new Button("prev", "prev", () => {
    const fakePage: Page = context;
    fakePage.setNum = fakePage.getNum + 1;
  });

  const btnWrap = createElement("div", ["btns-wrap"]);
  btnWrap.append(prev.getHTMLElement(), next.getHTMLElement());
  context.getHTMLElement().append(btnWrap);
}
