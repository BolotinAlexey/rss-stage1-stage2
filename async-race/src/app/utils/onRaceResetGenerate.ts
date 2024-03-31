import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
// eslint-disable-next-line import/no-cycle
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
      break;
    case "reset":
      onReset(e, page);
      break;

    default:
      break;
  }
}