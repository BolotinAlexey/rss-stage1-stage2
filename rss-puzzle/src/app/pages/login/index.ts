import checkLogin from "../../services/checkLogin";
import createForm from "../../services/createForm";
import submitLogin from "../../services/submitLogin";
import { createElement, getElementDocument } from "../../utils/supFunctions";

import "./style.scss";

export default function login() {
  const body: HTMLElement = getElementDocument("body");
  const container = createElement("div", ["page", "login", "container"]);
  const title = createElement(
    "h1",
    ["page__title", "visually-hidden"],
    "Login",
  );
  const { form, nameInput, surnameInput } = createForm();
  container.append(title, form);
  body.append(container);
  nameInput.addEventListener("change", checkLogin);
  surnameInput.addEventListener("change", checkLogin);
  form.addEventListener("submit", submitLogin);
}
