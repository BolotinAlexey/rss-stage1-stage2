import View from "../view";
import createLinks from "./createLinks";
import createNav from "./createNav";
import "./style.scss";

export default class HeaderView extends View {
  nav: HTMLElement;

  links: HTMLElement[];

  constructor() {
    super({
      tag: "header",
      class: ["header"],
      text: "",
    });
    this.nav = createNav(this.element);
    this.links = createLinks(this.nav);
  }
}