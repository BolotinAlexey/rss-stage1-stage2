import { DataWinner } from "../interfaces/dataWinner";
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import ApiCars from "../services/apiCars";
import ApiWinners from "../services/apiWinners";
import StoreWinners from "../store/winners";

export default async function onRemoveCar(car: ICar, track: ITrack) {
  const fakePage = track.page;
  await ApiCars.removeCar(car.id);
  if ("setCars" in fakePage) {
    fakePage.setCars = await ApiCars.getAllCars();
  }
  await track.loadCars();

  try {
    const apiWinner: DataWinner | undefined = await ApiWinners.getWinner(
      car.id,
    );
    if (apiWinner) {
      await ApiWinners.removeWinner(car.id);
    }
  } catch (error) {
    console.log("There is'nt car");
  }
  StoreWinners.getTable?.loadWinners();
}
