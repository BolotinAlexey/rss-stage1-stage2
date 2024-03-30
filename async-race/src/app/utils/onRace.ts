import { DataWinner } from "../interfaces/dataWinner";
import { ICar } from "../interfaces/responseDataCar";
// eslint-disable-next-line import/no-cycle
import ITrack from "../interfaces/track";
import ApiWinners from "../services/apiWinners";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import setCarBtnsDisabled from "./setCarBtnsDisabled";
import setTrackBtnsDisabled from "./setTrackBtnsDisabled";
import showWinner from "./showWinner";

export default async function onRace() {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;
  let winner: { time: number; car: ICar } | undefined;

  setTrackBtnsDisabled(track.getHTMLElement(), true);

  try {
    winner = await Promise.any(
      track.cars.map((car: ICar) => {
        setCarBtnsDisabled(car.html, true);
        let promise;
        try {
          promise = onStartStopCar(car, track, "start");
        } catch (error) {
          console.log("There is'nt winner");
        }
        return promise;
      }),
    );
  } catch (error) {
    console.log(error);
  }

  if (winner) {
    showWinner(winner.car.name);
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
  } else showWinner("nobody");
}
