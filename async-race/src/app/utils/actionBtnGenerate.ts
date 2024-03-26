import { ICar } from "../interfaces/responseData";
import onRemoveCar from "./onRemoveCar";
import onSelectCar from "./onSelectCar";
import onStartCar from "./onStartCar";
import onStopCar from "./onStopCar";

export default function actionBtnGenerate(e: Event, car: ICar) {
  const { target } = e;
  if (!(target instanceof HTMLButtonElement))
    throw new Error(`${target} isn't HTMLButtonElement`);
  const idBtn = target.id;
  switch (idBtn) {
    case "select":
      onSelectCar(car);
      break;

    case "remove":
      onRemoveCar(car);
      break;

    case "start":
      onStartCar(car);
      break;

    case "stop":
      onStopCar(car);
      break;

    default:
      break;
  }
}
