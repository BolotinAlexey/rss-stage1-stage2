import { NUMBER_CARS_GENERATE } from "../constants/index";
import IPage from "../interfaces/IPage";
import DataCar from "../interfaces/dataCar";
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import StoreTrack from "../store/track";
import carGenerator from "./carGenerator";

export default async function onGenerate(page: IPage) {
  const carPromises: Promise<ICar | null>[] = [];
  for (let i = 0; i < NUMBER_CARS_GENERATE; i += 1) {
    const dataCar: DataCar = carGenerator();
    const car: Promise<ICar | null> = ApiCars.createCar(dataCar);
    if (car !== null) carPromises.push(car);
  }
  await Promise.all(carPromises);

  const fakePage = page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  const tr: ITrack | null = StoreTrack.getTrack;
  if (tr) tr.loadCars();
}
