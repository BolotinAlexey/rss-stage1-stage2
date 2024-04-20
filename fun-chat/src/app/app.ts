import onLocation from "./components/router/onLocation";
// import LoginView from "./views/login/index";
// import { createElement, getElementDocument } from "./utils/supFunctions";
// import HeaderView from "./views/header/headerView";

export default class App {
  static createView() {
    window.addEventListener("load", onLocation);
    window.addEventListener("hashchange", onLocation);
    // window.addEventListener("popstate", () => onLocation);
    // const header = new HeaderView();
    // const body: HTMLElement = getElementDocument("body");
    // const main = createElement("main", ["main", "container"], "");
    // const login = new LoginView();
    // login.getHTMLElement().classList.add("active-page");
  }
}
