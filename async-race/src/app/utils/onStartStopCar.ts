import { MS_IN_SEC, StatusCode } from "../constants/index";
import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import onStartCar from "./onStartCar";
import onStopCar from "./onStopCar";

export default async function onStartStopCar(
  car: ICar,
  track: ITrack,
  btn: "start" | "stop",
  target?: HTMLButtonElement,
): Promise<{ time: number; car: ICar } | undefined> {
  const action: StatusEngine = btn === "start" ? "started" : "stopped";

  if (target) {
    const currentDisabled =
      target.parentElement?.querySelector("button:disabled");
    if (currentDisabled && currentDisabled instanceof HTMLButtonElement)
      currentDisabled.disabled = false;
    const fakeTarget = target;
    fakeTarget.disabled = true;
  }
  let dataEngine: ResponseEngine | void;
  try {
    dataEngine = await ApiCars.startStopCar(car, action);
  } catch (error) {
    console.log("An error occurred while starting/stopping the car:", error);
    dataEngine = undefined;
  }

  if (!dataEngine) return undefined;
  const time: number = dataEngine.distance / dataEngine.velocity;
  let statusCode: StatusCode | null;
  if (action === "started") statusCode = await onStartCar(car, time);
  else {
    onStopCar(car);
    return undefined;
  }
  if (statusCode === StatusCode.OK) {
    return { time: +(time / MS_IN_SEC).toFixed(2), car };
  }
  return Promise.reject();
}
