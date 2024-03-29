import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";

export default async function onRemoveCar(car: ICar, track: ITrack) {
  await ApiCars.removeCar(car.id);
  const fakePage = track.page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  track.loadCars();
}
