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
        time: Math.min(apiWinner.time, winner.time),
        wins: apiWinner.wins + 1,
        id: winner.car.id,
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
