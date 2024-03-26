import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import { ICar } from "../interfaces/responseData";
import ApiCars from "../services/apiCars";
import refreshTitles from "./refreshTitles";

export default async function onRemoveCar(car: ICar, track: Track) {
  console.log(car);
  await ApiCars.removeCar(car.id);
  // refreshTitles(track.page);
  const fakePage = track.page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  track.loadCars();
}
