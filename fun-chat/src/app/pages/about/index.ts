import { createElement, getElementDocument } from "../../utils/supFunctions";
import AboutView from "../../views/about/index";

const body: HTMLElement = getElementDocument("body");
export default function aboutPage() {
  body.innerHTML = "";
  const main = createElement("main", ["main", "container"], "");
  const aboutPage = new AboutView();

  main.append(aboutPage.getHTMLElement());
  body.append(main);
}
