import View from "../../views/view";
import "./style.scss";

export default class Winners extends View {
  constructor() {
    super({
      tag: "section",
      class: ["page", "page__winners"],
      text: "",
    });
  }
}
