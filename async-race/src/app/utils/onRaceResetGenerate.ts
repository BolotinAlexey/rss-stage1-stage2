import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import StoreTrack from "../store/track";
import onGenerate from "./onGenerate";
import onRace from "./onRace";
import onReset from "./onReset";

export default function onRaceResetGenerate(
  e: Event,
  name: RaceResetGenerate,
  page: IPage,
) {
  switch (name) {
    case "generate":
      onGenerate(page);
      break;
    case "race":
      onRace();
      StoreTrack.setIsRace = true;
      break;
    case "reset":
      onReset();
      StoreTrack.setIsRace = false;
      // StoreCars.controller.abort();
      // StoreCars.controller = new AbortController();
      break;

    default:
      break;
  }
}
