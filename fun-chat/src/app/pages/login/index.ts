import { createElement, getElementDocument } from "../../utils/supFunctions";
import LoginView from "../../views/login/index";

const body: HTMLElement = getElementDocument("body");
export default function loginPage() {
  body.innerHTML = "";
  const main = createElement("main", ["main", "container"], "");
  const login = new LoginView();

  main.append(login.getHTMLElement());
  body.append(main);
}
