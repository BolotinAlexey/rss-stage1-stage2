import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import startAnimation from "./startAnimation";

export default async function onStartStopCar(
  car: ICar,
  track: ITrack,
  btn: "start" | "stop",
) {
  const action: StatusEngine = btn === "start" ? "started" : "stopped";
  const dataEngine: ResponseEngine | void = await ApiCars.startStopCar(
    car,
    action,
  );
  if (!dataEngine) return;
  startAnimation(car, dataEngine.distance / dataEngine.velocity);
  const statusCode = await ApiCars.driveCar(car);
  if (statusCode === 500 && car.idFrame) {
    cancelAnimationFrame(car.idFrame);
    car.idFrame = null;
    if (!car.html?.classList.contains("crash"))
      car.html?.classList.add("crash");
    if (car.html?.style.transform)
      car.html.style.transform = car.html.style.transform + " rotate(180deg)";
  }
}
