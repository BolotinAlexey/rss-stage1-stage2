import lampHint from "../assets/lampHint";
import soundSvg from "../assets/soundSvg";
import { CheckBox } from "../interfaces/index";
import createCheckBox from "./createCheckBox";
import createVolume from "./createVolume";
import { createElement, getElementDocument } from "./supFunctions";

export default function createHintBlock() {
  const logo: HTMLElement = getElementDocument(".header__logo");
  const hintBlock: HTMLElement = createElement("div", ["hint-block"]);
  const lampHintChb: CheckBox = createCheckBox("lamp");
  const soundHintChb: CheckBox = createCheckBox("sound");
  const lampWrap = lampHintChb.checkBoxWrap;
  const soundWrap = soundHintChb.checkBoxWrap;
  const lamp = lampHintChb.checkBoxWrap;
  const sound = soundHintChb.checkBoxWrap;
  lampWrap.insertAdjacentHTML("beforeend", lampHint());
  soundWrap.insertAdjacentHTML("beforeend", soundSvg());
  hintBlock.append(lamp, sound);
  logo.insertAdjacentElement("afterend", hintBlock);

  const volume = createVolume();
  // volume.addEventListener("click", pronounceSentence);
  return { volume };
}
