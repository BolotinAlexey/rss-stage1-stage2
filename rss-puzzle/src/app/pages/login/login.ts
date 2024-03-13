import checkLogin from "../../services/checkLogin";
import createForm from "../../services/createForm";
import submitLogin from "../../services/submitLogin";
import { createElement } from "../../utils/supFunctions";

import "./style.scss";

export default function login(): HTMLElement {
  const container = createElement("div", [
    "page",
    "login",
    "container",
    "show",
  ]);
  const title = createElement(
    "h1",
    ["page__title", "visually-hidden"],
    "Login",
  );
  const { form, nameInput, surnameInput } = createForm();
  container.append(title, form);
  nameInput.addEventListener("input", checkLogin);
  surnameInput.addEventListener("input", checkLogin);
  nameInput.addEventListener("input", checkLogin);
  surnameInput.addEventListener("input", checkLogin);
  form.addEventListener("submit", submitLogin);
  return container;
}
