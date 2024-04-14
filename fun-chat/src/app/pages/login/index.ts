import { createElement, getElementDocument } from "../../utils/supFunctions";
import LoginView from "../../views/login/index";

export default async function loginPage() {
  const body: HTMLElement = getElementDocument("body");
  body.innerHTML = "";
  const main = createElement("main", ["main", "container"], "");
  const login = new LoginView();

  main.append(login.getHTMLElement());
  body.append(main);
}
