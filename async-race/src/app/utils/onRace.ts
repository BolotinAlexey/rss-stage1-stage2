/* eslint-disable import/no-cycle */
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import StoreWinners from "../store/winners";
import createOrUpdateWinner from "./createOrUpdateWinner";
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
    await createOrUpdateWinner(winner);
    StoreWinners.getTable?.loadWinners();
  } else showWinner("nobody");
}
