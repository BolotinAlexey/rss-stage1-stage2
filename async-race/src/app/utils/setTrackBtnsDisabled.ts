export default function setTrackBtnsDisabled(
  trackHtml: HTMLElement,
  isRace: boolean,
) {
  console.log(trackHtml);

  const startBtn = trackHtml.querySelector(".button-race");
  if (startBtn instanceof HTMLButtonElement) startBtn.disabled = isRace;

  if (!parent) return;
  const stopBtn = trackHtml.querySelector(".button-reset");
  if (stopBtn instanceof HTMLButtonElement) stopBtn.disabled = !isRace;
}
