import { User } from "../../interfaces/user";
import logoutSvg from "../../markups/svg/logoutSvg";
import SessionStorageAPI from "../../services/sessionStorageApi";
import WSApi from "../../services/wsApi";
import logout from "../../utils/logout";
import { createElement } from "../../utils/supFunctions";
import HeaderView from "./headerView/headerView";

export default function createHeader(user: User | null): HTMLElement {
  const header = new HeaderView();
  const logo: HTMLParagraphElement = createElement(
    "p",
    ["header__logo"],
    "FUN Chat",
  );
  const logoutWrap: HTMLDivElement = createElement("div", ["logout"]);
  const userName: HTMLSpanElement = createElement("span", ["logout__user"]);
  const logoutBtn: HTMLButtonElement = createElement("button", ["logout__btn"]);
  const logoutTxt: HTMLSpanElement = createElement("span", ["logout__txt"]);
  userName.textContent = user ? `User: ${user.login}` : "";
  const linkToAbout = createElement<HTMLAnchorElement>(
    "a",
    ["about__link"],
    "About",
  );
  linkToAbout.href = "/#/about";
  header.nav.append(linkToAbout);

  logoutTxt.textContent = "Logout";
  logoutBtn.append(logoutTxt);
  logoutBtn.insertAdjacentHTML("beforeend", logoutSvg());
  logoutBtn.addEventListener("click", () => {
    if (!SessionStorageAPI.getUser) {
      logout();
      return;
    }
    WSApi.logoutUser(SessionStorageAPI.getUser);
  });
  logoutWrap.append(userName, logoutBtn);
  header.getHTMLElement().append(logo, logoutWrap);
  return header.getHTMLElement();
}
