import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import setCarBtnsDisabled from "./setCarBtnsDisabled";
import setTrackBtnsDisabled from "./setTrackBtnsDisabled";
import showWinner from "./showWinner";

export default async function onRace(e: Event, page: IPage) {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;
  let winner: { time: number; car: ICar } | undefined;

  setTrackBtnsDisabled(track.getHTMLElement(), true);

  try {
    winner = await Promise.any(
      track.cars.map((car) => {
        setCarBtnsDisabled(car.html, true);
        let promise;
        try {
          promise = onStartStopCar(car, track, "start");
        } catch (error) {
          console.log("There is'nt winner");
          return;
        }
        return promise;
      }),
    );
  } catch (error) {}

  if (winner) showWinner(winner.car.name);
  else showWinner("nobody");
}
