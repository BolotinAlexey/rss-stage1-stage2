import IPage from "../../interfaces/IPage";
import ApiCars from "../../services/apiCars";
import commonPageGenerate from "../../utils/commonPageGenerate";
import refreshTitles from "../../utils/refreshTitles";
import View from "../../views/view";
import "./style.scss";

export default abstract class Page extends View implements IPage {
  namePage: "garage" | "winners";

  count: number = 0;

  num: number = 1;

  apiCars = new ApiCars();

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
    refreshTitles(this);
  }

  public get getNum(): number {
    return this.num;
  }
}
