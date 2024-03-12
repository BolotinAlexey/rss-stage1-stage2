import logoutSvg from "../../assets/logoutSvg";
import { User } from "../interfaces/index";
import logout from "../services/logout";
import { createElement } from "./supFunctions";

export default function createHeader(user: User): HTMLElement {
  const header: HTMLElement = createElement("header", ["header"]);
  const logo: HTMLParagraphElement = createElement(
    "p",
    ["header__logo"],
    "RSS Puzzle",
  );
  const logoutWrap: HTMLDivElement = createElement("div", ["logout"]);
  const userName: HTMLSpanElement = createElement("span", ["logout__user"]);
  const logoutBtn: HTMLButtonElement = createElement("button", ["logout__btn"]);
  userName.textContent = Object.values(user).join(" ");

  logoutBtn.textContent = "Logout";
  logoutBtn.insertAdjacentHTML("beforeend", logoutSvg());
  logoutBtn.addEventListener("click", logout);
  logoutWrap.append(userName, logoutBtn);
  header.append(logo, logoutWrap);
  return header;
}
