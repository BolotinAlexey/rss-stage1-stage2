import { UserResponse } from "../interfaces/userResponse";
import { createElement, getElementDocument } from "./supFunctions";

export default function renderUsers(
  users: UserResponse[],
  strState: "active" | "passive",
) {
  const usersList: HTMLElement = getElementDocument(`.users__list-${strState}`);
  const usersHTML: HTMLElement[] = users.map((user: UserResponse) => {
    const login: string = user && user.login ? user.login : "";
    return createElement("li", ["users__item", `user-${strState}`], login);
  });
  usersList.innerHTML = "";
  usersList.append(...usersHTML);
}
