import checkLogin from "./checkLogin";
import { createElement } from "../../utils/supFunctions";
import createForm from "./createForm";
import submitLogin from "./submitLogin";
import View from "../views";
import "./style.scss";

export default class LoginView extends View {
  constructor() {
    super({
      tag: "section",
      class: ["login", "page", "active-page"],
      text: "",
    });
    const title = createElement(
      "h1",
      ["page__title", "page__title"],
      "Authorization",
    );
    const { form, nameInput, passwordInput } = createForm();
    this.getHTMLElement().append(title, form);
    nameInput.addEventListener("input", checkLogin);
    passwordInput.addEventListener("input", checkLogin);
    nameInput.addEventListener("input", checkLogin);
    passwordInput.addEventListener("input", checkLogin);
    form.addEventListener("submit", submitLogin);
  }

  // return container;
}
