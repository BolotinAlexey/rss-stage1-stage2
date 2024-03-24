import commonPageGenerate from "../../utils/commonPageGenerate";
import View from "../../views/view";
import "./style.scss";

export default abstract class Page extends View {
  namePage: "garage" | "winners";

  count: number = 0;

  num: number = 1;

  constructor(namePage: "garage" | "winners") {
    super({
      tag: "section",
      class: ["page", `page__${namePage}`],
      text: "",
    });
    this.namePage = namePage;
    this.getHTMLElement().classList.add(`page__${this.namePage}`);
    commonPageGenerate(this);
  }

  setNum(num: number) {
    this.num = num;
  }
}
