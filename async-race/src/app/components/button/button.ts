import View from "../../views/view";
import "./style.scss";

export default class Button extends View {
  constructor(cls: string, txt: string, callback?: (e: Event) => void) {
    super({ tag: "button", class: ["button", cls], text: txt });
    if (!(this.getHTMLElement() instanceof HTMLButtonElement))
      throw new Error("Input isn't HTMLInputElement");
    if (callback) this.element.addEventListener("click", callback);
  }

  public getHTMLElement(): HTMLButtonElement {
    return <HTMLButtonElement>this.element;
  }
}
