import { ICar } from "../interfaces/responseDataCar";
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import setCarBtnsDisabled from "./setCarBtnsDisabled";
import setTrackBtnsDisabled from "./setTrackBtnsDisabled";

export default async function onReset(): Promise<void> {
  const track: ITrack | null = StoreTrack.getTrack;
  if (!track) return;

  setTrackBtnsDisabled(track.getHTMLElement(), false);

  try {
    await Promise.allSettled(
      track.cars.map((car) => {
        setCarBtnsDisabled(car.html, false);
        const promise: Promise<{ time: number; car: ICar } | undefined> =
          onStartStopCar(car, track, "stop");
        return promise;
      }),
    );
  } catch (error) {
    console.log(error);
  }
}
