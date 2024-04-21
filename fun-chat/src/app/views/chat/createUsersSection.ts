import onClickUser from "../../utils/onClickUser";
import onSearchUser from "../../utils/onSearchUser";
import { createElement } from "../../utils/supFunctions";

export default function createUsersSection(): HTMLElement {
  const section: HTMLElement = createElement("section", ["section", "users"]);
  const search: HTMLInputElement = createElement("input", ["users__search"]);
  const usersListActive: HTMLElement = createElement("ul", [
    "users__list",
    "users__list-active",
  ]);
  const usersListPassive: HTMLElement = createElement("ul", [
    "users__list",
    "users__list-passive",
  ]);

  section.append(search, usersListActive, usersListPassive);
  usersListActive.addEventListener("click", (e) => onClickUser(e, "active"));
  usersListPassive.addEventListener("click", (e) => onClickUser(e, "inactive"));
  search.addEventListener("input", onSearchUser);

  return section;
}
