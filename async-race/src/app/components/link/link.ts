import View from "../../views/view";
import "./style.scss";

export default class Link extends View {
  constructor(cls: string, txt: string, callback: (e: Event) => void) {
    super({ tag: "a", class: ["link", cls], text: txt });
    this.element.addEventListener("click", callback);
  }
}
