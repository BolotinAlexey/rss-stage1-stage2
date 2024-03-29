import { ResponseEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";

export default function onStopCar(car: ICar) {
  if (car.idFrame) cancelAnimationFrame(car.idFrame);
  if (car.html?.style.transform) car.html.style.transform = "";
}
