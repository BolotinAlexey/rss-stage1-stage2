import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
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
  const tr: Track | null = StoreTrack.getTrack;
  if (tr) tr.loadCars();
}
