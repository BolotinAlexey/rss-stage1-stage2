import { UserResponse } from "../interfaces/userResponse";
import { createElement, getElementDocument } from "./supFunctions";

export default function renderUsers(
  users: UserResponse[],
  strState: "active" | "passive",
) {
  const usersList: HTMLElement = getElementDocument(`.users__list-${strState}`);
  const usersHTML: HTMLElement[] = users.map((user: UserResponse) => {
    const login: string = user && user.login ? user.login : "";
    const li = createElement("li", ["users__item", `user-${strState}`], login);
    const unReadMsgsNumber = user.unReadMsgs;
    if (unReadMsgsNumber)
      li.append(
        createElement(
          "span",
          ["un-read-messages"],
          unReadMsgsNumber.toString(),
        ),
      );
    return li;
  });
  usersList.innerHTML = "";
  usersList.append(...usersHTML);
}
