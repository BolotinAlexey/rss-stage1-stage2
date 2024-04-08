import { DataWinner } from "../interfaces/dataWinner";
import { ICar } from "../interfaces/responseDataCar";
import ApiWinners from "../services/apiWinners";

export default async function createOrUpdateWinner(winner: {
  time: number;
  car: ICar;
}) {
  let apiWinner: DataWinner | undefined;
  try {
    apiWinner = await ApiWinners.getWinner(winner.car.id);
    if (apiWinner) {
      await ApiWinners.updateWinner({
        id: winner.car.id,
        wins: apiWinner.wins + 1,
        time: Math.min(apiWinner.time, winner.time),
      });
    }
  } catch (error) {
    await ApiWinners.createWinner({
      id: winner.car.id,
      wins: 1,
      time: winner.time,
    });
  }
}
