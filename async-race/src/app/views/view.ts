import { createElement } from "../services/supFunctions";

export default abstract class View {
  tag: string;

  class: string[];

  text: string;

  element: HTMLElement;

  constructor(params: { tag: string; class: string[]; text: string }) {
    this.tag = params.tag;
    this.class = params.class;
    this.text = params.text;
    this.element = createElement(this.tag, this.class, this.text);
  }

  public getHTMLElement(): HTMLElement {
    return this.element;
  }
}
