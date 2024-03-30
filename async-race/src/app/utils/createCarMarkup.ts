import Button from "../components/button/button";
import { ICar } from "../interfaces/responseDataCar";
// eslint-disable-next-line import/no-cycle
import ITrack from "../interfaces/track";
import carSvg from "../markups/carSvg";
import flagSvg from "../markups/flagSvg";
import { createElement } from "../services/supFunctions";
import actionBtnGenerate from "./actionBtnGenerate";

export default function createCarMarkup(car: ICar, track: ITrack) {
  const roadWrap: HTMLElement = createElement("div", ["road-wrap"]);
  const btnsWrap: HTMLElement = createElement("div", ["btns-car-wrap"]);
  const road: HTMLElement = createElement("div", ["road"]);
  const carSpan: HTMLElement = createElement("span", ["road__car"]);
  const fakeCar = car;
  fakeCar.html = carSpan;

  const arrBtns: HTMLButtonElement[] = [
    "select",
    "remove",
    "start",
    "stop",
  ].map((action: string) => {
    const btn = new Button(`button-${action}`, action, (e: Event) =>
      actionBtnGenerate(e, car, track),
    );
    if (action === "stop") btn.getHTMLElement().disabled = true;
    btn.getHTMLElement().id = action;
    return btn.getHTMLElement();
  });
  btnsWrap.append(...arrBtns);

  const carTitle: HTMLElement = createElement("h4", ["car-title"], car.name);
  carSpan.insertAdjacentHTML("afterbegin", carSvg());
  carSpan.style.color = car.color;
  road.append(carSpan);
  road.insertAdjacentHTML("beforeend", flagSvg());
  roadWrap.append(carTitle, btnsWrap, road);
  return roadWrap;
}
