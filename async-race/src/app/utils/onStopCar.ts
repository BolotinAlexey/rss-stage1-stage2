import Track from "../components/track/track";
import { ICar } from "../interfaces/responseData";

export default function onStopCar(car: ICar, track: Track) {
  console.log(car);
}
