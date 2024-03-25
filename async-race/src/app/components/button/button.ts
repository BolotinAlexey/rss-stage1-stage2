import View from "../../views/view";
import "./style.scss";

export default class Button extends View {
  constructor(cls: string, txt: string, callback: (e: Event) => void) {
    super({ tag: "button", class: ["button", cls], text: txt });
    this.element.addEventListener("click", callback);
  }
}
