import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import { getElementDocument } from "../services/supFunctions";
import onStartCar from "./onStartCar";
import onStopCar from "./onStopCar";

export default async function onStartStopCar(
  car: ICar,
  track: ITrack,
  btn: "start" | "stop",
  target?: HTMLButtonElement,
) {
  const action: StatusEngine = btn === "start" ? "started" : "stopped";

  if (target) {
    const currentDisabled =
      target.parentElement?.querySelector("button:disabled");
    if (currentDisabled && currentDisabled instanceof HTMLButtonElement)
      currentDisabled.disabled = false;
    target.disabled = true;
  }

  const dataEngine: ResponseEngine | void = await ApiCars.startStopCar(
    car,
    action,
  );

  if (!dataEngine) return;
  const time: number = dataEngine.distance / dataEngine.velocity;
  let statusCode: number | void = undefined;
  if (action === "started") statusCode = await onStartCar(car, time);
  else {
    onStopCar(car);
    return;
  }
  if (statusCode === 200) {
    return Promise.resolve({ time, car });
  } else {
    return Promise.reject("crash");
  }
}
