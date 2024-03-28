import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import onRemoveCar from "./onRemoveCar";
import onSelectCar from "./onSelectCar";
import onStartStopCar from "./onStartStopCar";

export default function actionBtnGenerate(e: Event, car: ICar, track: ITrack) {
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
      onStartStopCar(car, track, idBtn);
      break;

    case "stop":
      onStartStopCar(car, track, idBtn);
      break;

    default:
      break;
  }
}
