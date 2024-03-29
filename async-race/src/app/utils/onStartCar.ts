import { ResponseEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
import ApiCars from "../services/apiCars";
import startAnimation from "./startAnimation";

export default async function onStartCar(car: ICar, time: number) {
  startAnimation(car, time);
  const statusCode: number | void = await ApiCars.driveCar(car);
  if (statusCode === 500 && car.idFrame) {
    cancelAnimationFrame(car.idFrame);
    car.idFrame = null;
    if (car.html?.style.transform)
      car.html.style.transform = car.html.style.transform + " rotate(150deg)";
  }
  return statusCode;
}
