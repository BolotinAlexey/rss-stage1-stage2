import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";

export default function onStopCar(car: ICar, track: ITrack) {
  console.log(car, track);
}
