import volumeSvg from "../assets/volumeSvg";
import { createElement, getElementDocument } from "./supFunctions";

export default function createVolume(): HTMLButtonElement {
  const wrapResult: HTMLElement = getElementDocument(".result-block-wrap");
  const volume: HTMLButtonElement = createElement<HTMLButtonElement>("button", [
    "button",
    "button-volume",
  ]);
  volume.insertAdjacentHTML("beforeend", volumeSvg());
  wrapResult.append(volume);
  return volume;
}
