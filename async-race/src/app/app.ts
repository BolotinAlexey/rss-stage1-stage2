import { getElementDocument } from "./services/supFunctions";
import HeaderView from "./views/header/header-view";

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const header = new HeaderView();
    const body: HTMLElement = getElementDocument("body");
    body.append(header.getHTMLElement());
  }
}
