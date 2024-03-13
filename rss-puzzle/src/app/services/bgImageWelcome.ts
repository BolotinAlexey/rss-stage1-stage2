import { createElement } from "../utils/supFunctions";

export default function bgImageWelcome(): HTMLElement {
  const img = createElement("img", ["bg-image-welcome"]);
  // if (img instanceof HTMLImageElement) img.src = "../../assets/bg_puzzle.png";
  return img;
}
