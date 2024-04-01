/* eslint-disable consistent-return */
import ITrack from "../interfaces/track";
import StoreTrack from "../store/track";
import onStartStopCar from "./onStartStopCar";
import setCarBtnsDisabled from "./setCarBtnsDisabled";
import setTrackBtnsDisabled from "./setTrackBtnsDisabled";

export default async function onReset() {
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
  } catch (error) {
    console.log(error);
  }
}
