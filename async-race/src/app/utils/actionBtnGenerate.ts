import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import onRemoveCar from "./onRemoveCar";
import onSelectCar from "./onSelectCar";
import onStartStopCar from "./onStartStopCar";

export default async function actionBtnGenerate(
  e: Event,
  car: ICar,
  track: ITrack,
) {
  const { target } = e;
  if (!(target instanceof HTMLButtonElement))
    throw new Error(`${target} isn't HTMLButtonElement`);
  const idBtn = target.id;
  switch (idBtn) {
    case "select":
      onSelectCar(car);
      break;

    case "remove":
      onRemoveCar(car, track);
      break;

    case "start":
      try {
        await onStartStopCar(car, track, idBtn, target);
      } catch (error) {
        console.log(`Crash drive ${car.name}!!!`);
      }
      break;

    case "stop":
      onStartStopCar(car, track, idBtn, target);
      break;

    default:
      break;
  }
}
