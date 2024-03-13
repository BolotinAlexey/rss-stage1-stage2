import logoutSvg from "../../assets/logoutSvg";
import { User } from "../interfaces/index";
import logout from "../services/logout";
import { createElement } from "./supFunctions";

export default function createHeader(user: User | null): HTMLElement {
  const header: HTMLElement = createElement("header", ["header"]);
  const logo: HTMLParagraphElement = createElement(
    "p",
    ["header__logo"],
    "RSS Puzzle",
  );
  const logoutWrap: HTMLDivElement = createElement("div", ["logout"]);
  const userName: HTMLSpanElement = createElement("span", ["logout__user"]);
  const logoutBtn: HTMLButtonElement = createElement("button", ["logout__btn"]);
  const logoutTxt: HTMLSpanElement = createElement("span", ["logout__txt"]);
  userName.textContent = user ? Object.values(user).join(" ") : "";

  logoutTxt.textContent = "Logout";
  logoutBtn.append(logoutTxt);
  logoutBtn.insertAdjacentHTML("beforeend", logoutSvg());
  logoutBtn.addEventListener("click", logout);
  logoutWrap.append(userName, logoutBtn);
  header.append(logo, logoutWrap);
  return header;
}
