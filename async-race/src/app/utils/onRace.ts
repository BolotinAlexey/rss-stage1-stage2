import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import showWinner from "./showWinner";

export default async function onRace(e: Event, page: IPage) {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;
  let winner: { time: number; car: ICar } | undefined;

  winner = await Promise.any(
    track.cars.map((car) => {
      let pr;
      try {
        pr = onStartStopCar(car, track, "start");
      } catch (error) {
        console.log("There is'nt winner");
        return;
      }
      return pr;
    }),
  );

  if (winner) showWinner(winner.car.name);
}
