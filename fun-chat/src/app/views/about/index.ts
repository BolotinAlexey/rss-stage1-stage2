import onLocation from "../../components/router/onLocation";
import { createElement } from "../../utils/supFunctions";
import View from "../views";
import "./style.scss";

export default class AboutView extends View {
  constructor() {
    super({
      tag: "section",
      class: ["about", "page", "active-page"],
      text: "",
    });
    const title = createElement(
      "h1",
      ["page__title", "about"],
      "About application",
    );

    const describe = createElement(
      "div",
      ["about__describe"],
      "This program is made in the framework of study at the RSS SCHOOL JS/FE 2023Q3 school.</br> Fronted is written by Bolotin O.A.",
    );
    const btn = createElement("button", ["about__button"], "Exit");

    btn.addEventListener("click", () => {
      // window.history.back();
      window.history.pushState({}, "", `#chat`);
      onLocation();
    });
    this.getHTMLElement().append(title, describe, btn);
  }
}
