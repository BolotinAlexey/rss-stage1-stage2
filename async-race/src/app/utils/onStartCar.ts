import { StatusCode } from "../constants/index";
import { ICar } from "../interfaces/responseDataCar";
import ApiCars from "../services/apiCars";
import startAnimation from "./startAnimation";

export default async function onStartCar(car: ICar, time: number) {
  startAnimation(car, time);
  const statusCode: StatusCode | null = await ApiCars.driveCar(car);
  const fakeCar = car;
  if (statusCode === StatusCode.INTERNAL_SERVER_ERROR && car.idFrame) {
    cancelAnimationFrame(car.idFrame);
    fakeCar.idFrame = null;
    if (fakeCar.html?.style.transform)
      fakeCar.html.style.transform = `${fakeCar.html.style.transform} rotate(150deg)`;
  }
  return statusCode;
}
