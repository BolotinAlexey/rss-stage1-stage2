import View from "../../views";
import createNav from "../createNav";
import "./style.scss";

export default class HeaderView extends View {
  nav: HTMLElement;

  constructor() {
    super({
      tag: "header",
      class: ["header"],
      text: "",
    });
    this.nav = createNav(this.element);
  }
}