import { NUMBER_CARS_GENERATE } from "../constants/index";
import IPage from "../interfaces/IPage";
import DataCar from "../interfaces/dataCar";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import StoreTrack from "../store/track";
import carGenerator from "./carGenerator";

export default async function onGenerate(page: IPage) {
  for (let i = 0; i < NUMBER_CARS_GENERATE; i += 1) {
    const car: DataCar = carGenerator();
    // eslint-disable-next-line no-await-in-loop
    await ApiCars.createCar(car);
  }

  const fakePage = page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  const tr: ITrack | null = StoreTrack.getTrack;
  if (tr) tr.loadCars();
}
