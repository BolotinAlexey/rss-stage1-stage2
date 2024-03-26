import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import ApiCars from "../services/apiCars";

export default async function createCar(
  name: string,
  color: string,
  page: IPage,
) {
  await ApiCars.createCar({ name, color });

  const fakePage = page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  if ("track" in fakePage && fakePage.track instanceof Track) {
    fakePage.track.loadCars();
  }
}
