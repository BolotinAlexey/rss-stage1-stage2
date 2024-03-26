import Button from "../components/button/button";
import IPage from "../interfaces/IPage";
import { Garage } from "../pages/index";
import { createElement } from "../services/supFunctions";

export default function createPrevNext(context: IPage) {
  const prev = new Button("prev", "prev", () => {
    const fakePage: Garage = context as Garage;
    fakePage.setNum = fakePage.getNum - 1;
    fakePage.track.loadCars();
  });
  const next = new Button("next", "next", () => {
    const fakePage: Garage = context as Garage;
    fakePage.setNum = fakePage.getNum + 1;
    fakePage.track.loadCars();
  });
  const btnWrap = createElement("div", ["btns-wrap"]);
  btnWrap.append(prev.getHTMLElement(), next.getHTMLElement());
  context.getHTMLElement().append(btnWrap);
}
