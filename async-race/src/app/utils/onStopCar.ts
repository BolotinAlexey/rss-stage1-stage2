import { ICar } from "../interfaces/responseDataCar";

export default function onStopCar(car: ICar) {
  const fakeCar = car;
  if (car.idFrame) cancelAnimationFrame(car.idFrame);
  if (fakeCar.html?.style.transform) fakeCar.html.style.transform = "";
}
