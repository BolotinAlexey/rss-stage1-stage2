import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import onRemoveCar from "./onRemoveCar";
import onSelectCar from "./onSelectCar";
import onStartCar from "./onStartCar";
import onStopCar from "./onStopCar";

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
      onStartCar(car, track);
      break;

    case "stop":
      onStopCar(car, track);
      break;

    default:
      break;
  }
}
