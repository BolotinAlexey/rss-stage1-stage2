import View from "../../views/view";
import "./style.scss";

export default class Input extends View {
  constructor(cls: string, type: "text" | "color") {
    super({ tag: "input", class: ["input", cls], text: "" });
    if (!(this.getHTMLElement() instanceof HTMLInputElement))
      throw new Error("Input isn't HTMLInputElement");
    this.getHTMLElement().type = type;
    this.getHTMLElement().name = type;
  }

  public getHTMLElement(): HTMLInputElement {
    return <HTMLInputElement>this.element;
  }
}
