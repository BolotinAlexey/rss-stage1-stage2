import IPage from "../interfaces/IPage";
import RaceResetGenerate from "../interfaces/raceResetGenerate";
import onGenerate from "./onGenerate";

export default function onRaceResetGenerate(
  e: Event,
  name: RaceResetGenerate,
  page: IPage,
) {
  switch (name) {
    case "generate":
      onGenerate(page);
      break;

    default:
      break;
  }
}
