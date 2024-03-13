import { User } from "../../interfaces/index";
import welcomeMarkup from "../../markups/welcomeMarkup";
import ApiLS from "../../services/apiLocalStorage";
import { createElement } from "../../utils/supFunctions";
import updateHeader from "../../utils/updateHeader";
import startGame from "../game/startGame";
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
  welcomePage.insertAdjacentHTML("beforeend", welcomeMarkup());
  const welcomeBtn = createElement(
    "button",
    ["button", "welcome__button"],
    "Start game",
  );
  welcomeBtn.addEventListener("click", startGame);
  welcomePage.append(welcomeBtn);

  return welcomePage;
}
