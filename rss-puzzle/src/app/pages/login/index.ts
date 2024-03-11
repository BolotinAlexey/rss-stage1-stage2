import createForm from "../../services/createForm";
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
  const form = createForm();
  container.append(title, form);
  body.append(container);
}
