import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import setCarBtnsDisabled from "./setCarBtnsDisabled";
import setTrackBtnsDisabled from "./setTrackBtnsDisabled";

export default async function onReset(e: Event, page: IPage) {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;

  setTrackBtnsDisabled(track.getHTMLElement(), false);

  try {
    await Promise.allSettled(
      track.cars.map((car) => {
        setCarBtnsDisabled(car.html, false);
        let promise;
        try {
          promise = onStartStopCar(car, track, "stop");
        } catch (error) {
          console.log(error);
          return;
        }
        return promise;
      }),
    );
  } catch (error) {}
}
