import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import onStartCar from "./onStartCar";
import onStopCar from "./onStopCar";
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
  if (action === "started") onStartCar(car, dataEngine);
  else onStopCar(car, dataEngine);
}
