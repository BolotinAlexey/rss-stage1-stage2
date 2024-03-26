import Button from "../components/button/button";
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

  // const prev = new Button("prev", "prev", () => {
  //   const fakePage: Page = context;
  //   fakePage.setNum = fakePage.getNum - 1;
  // });

  // const next = new Button("prev", "prev", () => {
  //   const fakePage: Page = context;
  //   fakePage.setNum = fakePage.getNum + 1;
  // });

  const btnWrap = createElement("div", ["btns-wrap"]);
  btnWrap.append(prev.getHTMLElement(), next.getHTMLElement());
  context.getHTMLElement().append(btnWrap);
}
