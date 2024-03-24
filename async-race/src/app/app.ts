import Garage from "./pages/garage/garage-view";
import Winners from "./pages/winners/winners-view";
import { createElement, getElementDocument } from "./services/supFunctions";
import HeaderView from "./views/header/header-view";

export default class App {
  constructor() {
    this.createView();
  }

  // eslint-disable-next-line class-methods-use-this
  createView() {
    const header = new HeaderView();
    const body: HTMLElement = getElementDocument("body");
    const main = createElement("main", ["main"], "");
    const winners = new Winners();
    const garage = new Garage();
    garage.getHTMLElement().classList.add("active-page");

    main.append(garage.getHTMLElement(), winners.getHTMLElement());
    body.append(header.getHTMLElement(), main);
  }
}
