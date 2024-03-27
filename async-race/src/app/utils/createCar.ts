import IPage from "../interfaces/IPage";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import StoreTrack from "../store/track";

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
  const tr: ITrack | null = StoreTrack.getTrack;
  if (tr) tr.loadCars();
}
