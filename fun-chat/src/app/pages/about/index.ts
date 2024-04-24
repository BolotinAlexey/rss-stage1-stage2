import { createElement, getElementDocument } from "../../utils/supFunctions";
import AboutView from "../../views/about/index";

const body: HTMLElement = getElementDocument("body");
export default function aboutPage() {
  body.innerHTML = "";
  const main = createElement("main", ["main", "container"], "");
  const aboutPageView = new AboutView();

  main.append(aboutPageView.getHTMLElement());
  body.append(main);
}
