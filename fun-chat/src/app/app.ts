import LoginView from "./pages/login/index";
import { createElement, getElementDocument } from "./utils/supFunctions";
import HeaderView from "./views/header/headerView";

export default class App {
  static createView() {
    const header = new HeaderView();
    const body: HTMLElement = getElementDocument("body");
    const main = createElement("main", ["main", "container"], "");
    const login = new LoginView();
    login.getHTMLElement().classList.add("active-page");

    main.append(login.getHTMLElement());
    body.append(header.getHTMLElement(), main);
  }
}
