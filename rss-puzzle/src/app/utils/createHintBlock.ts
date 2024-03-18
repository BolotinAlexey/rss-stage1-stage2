import lampHint from "../assets/lampHint";
import { CheckBox } from "../interfaces/index";
import createCheckBox from "./createCheckBox";
import createVolume from "./createVolume";
import { createElement, getElementDocument } from "./supFunctions";

export default function createHintBlock() {
  const logo: HTMLElement = getElementDocument(".header__logo");
  const hintBlock: HTMLElement = createElement("div", ["hint-block"]);
  const lampHintChb: CheckBox = createCheckBox("lamp");
  const lampWrap = lampHintChb.checkBoxWrap;
  const lamp = lampHintChb.checkBoxWrap;
  lampWrap.insertAdjacentHTML("beforeend", lampHint());
  hintBlock.append(lamp);
  logo.insertAdjacentElement("afterend", hintBlock);
  const volume = createVolume();

  return volume;
}
