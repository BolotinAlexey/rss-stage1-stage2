import { User } from "../../interfaces/index";
import ApiLS from "../../services/apiLocalStorage";
import { createElement } from "../../utils/supFunctions";
import updateHeader from "../../utils/updateHeader";
import "./style.scss";

export default function welcome(): HTMLElement {
  const welcomePage: HTMLElement = createElement("div", [
    "container",
    "welcome",
    "page",
  ]);
  const header: HTMLElement | null = document.querySelector("header");
  const apiLS = new ApiLS();
  const user: User | null = apiLS.isUser() ? apiLS.getUser() : null;

  if (header && user) updateHeader(user);

  // const login: HTMLDivElement | null = document.querySelector(".login");
  // if (login && login.classList.contains("show")) login.classList.remove("show");
  // welcomePage.classList.add("show");
  return welcomePage;
}
