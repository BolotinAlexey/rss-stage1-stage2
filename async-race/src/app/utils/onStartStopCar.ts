/* eslint-disable consistent-return */
import { ResponseEngine, StatusEngine } from "../interfaces/engine";
import { ICar } from "../interfaces/responseDataCar";
// eslint-disable-next-line import/no-cycle
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

  const dataEngine: ResponseEngine | void = await ApiCars.startStopCar(
    car,
    action,
  );

  if (!dataEngine) return;
  const time: number = dataEngine.distance / dataEngine.velocity;
  let statusCode: number | void;
  if (action === "started") statusCode = await onStartCar(car, time);
  else {
    onStopCar(car);
    return;
  }
  if (statusCode === 200) {
    return { time, car };
  }
  return Promise.reject();
}
