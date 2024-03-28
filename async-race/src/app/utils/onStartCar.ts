import { ResponseEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";
import ApiCars from "../services/apiCars";
import startAnimation from "./startAnimation";

export default async function onStartCar(
  car: ICar,
  dataEngine: ResponseEngine,
) {
  startAnimation(car, dataEngine.distance / dataEngine.velocity);
  const statusCode = await ApiCars.driveCar(car);
  if (statusCode === 500 && car.idFrame) {
    cancelAnimationFrame(car.idFrame);
    car.idFrame = null;
    if (car.html?.style.transform)
      car.html.style.transform = car.html.style.transform + " rotate(150deg)";
  }
}
