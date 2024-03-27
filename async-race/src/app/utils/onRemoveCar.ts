import Track from "../components/track/track";
import { ICar } from "../interfaces/responseData";
import ApiCars from "../services/apiCars";

export default async function onRemoveCar(car: ICar, track: Track) {
  await ApiCars.removeCar(car.id);
  const fakePage = track.page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  track.loadCars();
}
