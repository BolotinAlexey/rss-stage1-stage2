import View from "../../views/view";
import "./style.scss";

export default class Garage extends View {
  constructor() {
    super({
      tag: "section",
      class: ["page", "page__garage"],
      text: "",
    });
  }
}
