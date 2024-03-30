import Button from "../components/button/button";
import arrowSvg from "../markups/arrowSvg";

function onArrowBtn(e: Event, name: "Wins" | "Best_time") {}

export default function createArrowBtn(
  name: "Wins" | "Best_time",
): HTMLButtonElement {
  const btn = new Button(`table__arrow`, "", (e: Event) => onArrowBtn(e, name));
  btn.getHTMLElement().insertAdjacentHTML("beforeend", arrowSvg());
  return btn.getHTMLElement();
}
