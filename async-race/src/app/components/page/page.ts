import commonPageGenerate from "../../utils/commonPageGenerate";
import refreshCarsTitles from "../../utils/refreshCars";
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

  public set setNum(num: number) {
    this.num = num;
    refreshCarsTitles(this);
  }

  public get getNum(): number {
    return this.num;
  }
}
