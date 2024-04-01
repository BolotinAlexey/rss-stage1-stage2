export default function setTrackBtnsDisabled(
  trackHtml: HTMLElement,
  isRace: boolean,
) {
  const startBtn = trackHtml.querySelector(".button-race");
  if (startBtn instanceof HTMLButtonElement) startBtn.disabled = isRace;

  const stopBtn = trackHtml.querySelector(".button-reset");
  if (stopBtn instanceof HTMLButtonElement) stopBtn.disabled = !isRace;
}
