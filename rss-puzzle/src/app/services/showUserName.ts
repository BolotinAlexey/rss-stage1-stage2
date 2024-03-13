import { User } from "../interfaces/index";
import { createElement, getElementDocument } from "../utils/supFunctions";

const TIME_SHOW_USERNAME = 5000;

export default function showUserName(userObj: User) {
  const userName = createElement(
    "p",
    ["welcome__user-name"],
    `Welcome ${Object.values(userObj).join(" ")}!`,
  );

  const welcomePage = getElementDocument(".welcome");
  welcomePage.append(userName);

  setTimeout(() => userName.remove(), TIME_SHOW_USERNAME);
}
