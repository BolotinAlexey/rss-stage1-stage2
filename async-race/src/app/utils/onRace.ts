import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import { ICar } from "../interfaces/responseData";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";

export default async function onRace(e: Event, page: IPage) {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;
  console.log(track.cars[0]);
  const winner: { time: number; car: ICar } | undefined = await Promise.any(
    track.cars.map((car) => {
      return onStartStopCar(car, track, "start");
    }),
  );
  console.log(winner);
}
