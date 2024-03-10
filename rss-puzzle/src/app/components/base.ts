type BaseProps = Record<"tag" | "class" | "txt", string>;
export class Base {
  private tag: string;
  private class: string;
  private txt: string;
  private parent: HTMLElement | null;
  constructor(pr: BaseProps, parent: HTMLElement | null) {
    this.tag = pr.tag;
    this.class = pr.class;
    this.txt = pr.txt;
    this.parent = parent;
  }
  private createElement(): HTMLElement {
    const el = document.createElement(this.tag);
    el.className = this.class;
    el.textContent = this.txt;
    return el;
  }

  public attachToParent(): HTMLElement {
    const el = this.createElement();
    if (!this.parent) throw new Error("Parent don't exist");
    this.parent.appendChild(el);
    return el;
  }
}
