import ITrack from "../interfaces/track";
import { getElementDocument } from "../services/supFunctions";

export default function disabledOrEnabledRemoveAndSelectBtns(
  track: ITrack | null,
  isRace: boolean,
) {
  if (!track) return;
  const generate = getElementDocument(".button-generate");
  if (generate instanceof HTMLButtonElement) generate.disabled = isRace;
  const removes = track?.getHTMLElement().querySelectorAll(".button-remove");
  const selects = track?.getHTMLElement().querySelectorAll(".button-select");
  const stops = track?.getHTMLElement().querySelectorAll(".button-stop");
  if (removes?.length)
    Object.values(removes).forEach((btn) => {
      const fbtn = btn;
      if (!(fbtn instanceof HTMLButtonElement))
        throw new Error("btn isn't btn");
      fbtn.disabled = isRace;
    });
  if (selects?.length)
    Object.values(selects).forEach((btn) => {
      const fbtn = btn;
      if (!(fbtn instanceof HTMLButtonElement))
        throw new Error("btn isn't btn");
      fbtn.disabled = isRace;
    });
  if (stops?.length)
    Object.values(stops).forEach((btn) => {
      const fbtn = btn;
      if (!(fbtn instanceof HTMLButtonElement))
        throw new Error("btn isn't btn");
      fbtn.disabled = isRace;
    });
}