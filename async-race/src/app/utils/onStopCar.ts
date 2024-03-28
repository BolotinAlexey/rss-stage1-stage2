import { ResponseEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";

export default function onStopCar(car: ICar, dataEngine: ResponseEngine) {
  console.log(car, dataEngine);
  if (car.idFrame) cancelAnimationFrame(car.idFrame);
  if (car.html?.style.transform) car.html.style.transform = "";
}
