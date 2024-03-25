import { ICar } from "../interfaces/responseData";
import carSvg from "../markups/carSvg";
import flagSvg from "../markups/flagSvg";
import { createElement } from "../services/supFunctions";

export default function createCarMarkup(car: ICar) {
  const road: HTMLElement = createElement("div", ["road"]);
  const carSpan: HTMLElement = createElement("span", ["road__car"]);
  carSpan.insertAdjacentHTML("afterbegin", carSvg());
  carSpan.style.color = car.color;
  road.append(carSpan);
  road.insertAdjacentHTML("beforeend", flagSvg());
  return road;
}
