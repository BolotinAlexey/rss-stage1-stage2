import { createElement } from "../../utils/supFunctions";

export default function createNav(element: HTMLElement) {
  const nav = createElement("nav", ["nav"]);
  element.append(nav);
  return nav;
}
