import { TIME_SHOW_USERNAME } from "../constants/index";
import { User } from "../interfaces/index";
import { createElement, getElementDocument } from "../utils/supFunctions";

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
