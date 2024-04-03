import ITrack from "../interfaces/track";

export default function disabledOrEnabledRemoveAndSelectBtns(
  track: ITrack | null,
  isRace: boolean,
) {
  if (!track) return;
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
