import onSearchUser from "../../utils/onSearchUser";
import { createElement } from "../../utils/supFunctions";

export default function createUsersSection(): HTMLElement {
  const section: HTMLElement = createElement("section", ["section", "users"]);
  const search: HTMLInputElement = createElement("input", ["users__search"]);
  const usersList: HTMLElement = createElement("ul", ["users__list"]);

  section.append(search, usersList);
  search.addEventListener("input", onSearchUser);

  return section;
}
