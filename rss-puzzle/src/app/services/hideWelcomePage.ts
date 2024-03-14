import { getElementDocument } from "../utils/supFunctions";

export default function hideWelcomePage() {
  const welcome: HTMLElement = getElementDocument(".welcome");
  if (welcome.classList.contains("show")) welcome.classList.remove("show");

  const bgImg = getElementDocument(".bg-image-welcome");
  if (bgImg.classList.contains("show")) bgImg.classList.remove("show");
}
