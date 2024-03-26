import Track from "../components/track/track";
import { ICar } from "../interfaces/responseData";

export default function onSelectCar(car: ICar, track: Track) {
  console.log(car);
}
