import { User } from "../interfaces/index";
import { getElementDocument } from "./supFunctions";

export default function updateHeader(user: User) {
  const userName: HTMLSpanElement = getElementDocument(".logout__user");
  userName.textContent = Object.values(user).join(" ");
}
