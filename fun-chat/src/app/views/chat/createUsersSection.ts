import onSearchUser from "../../utils/onSearchUser";
import { createElement } from "../../utils/supFunctions";

export default function createUsersSection(): HTMLElement {
  const section: HTMLElement = createElement("section", ["section", "users"]);
  const search: HTMLInputElement = createElement("input", ["users__search"]);
  const usersListActive: HTMLElement = createElement("ul", [
    "users__list-active",
  ]);
  const usersListPassive: HTMLElement = createElement("ul", [
    "users__list-passive",
  ]);

  section.append(search, usersListActive, usersListPassive);
  search.addEventListener("input", onSearchUser);

  return section;
}
