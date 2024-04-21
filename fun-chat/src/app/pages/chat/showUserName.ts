import { User } from "../../interfaces/user";
import { createElement } from "../../utils/supFunctions";

export default function showUserName(userObj: User) {
  const userName = createElement(
    "p",
    ["welcome__user-name"],
    `Welcome ${Object.values(userObj).join(" ")}!`,
  );
}
