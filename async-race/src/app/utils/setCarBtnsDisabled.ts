export default function setCarBtnsDisabled(
  carHtml: HTMLElement | null | undefined,
  isRace: boolean,
) {
  if (!(carHtml instanceof HTMLElement)) return;
  const parent: HTMLElement | null | undefined =
    carHtml.parentElement?.parentElement;

  if (!parent) return;
  const startBtn = parent.querySelector(".button-start");
  if (startBtn instanceof HTMLButtonElement) startBtn.disabled = isRace;
  if (!parent) return;
  const stopBtn = parent.querySelector(".button-stop");
  if (stopBtn instanceof HTMLButtonElement) stopBtn.disabled = !isRace;
}
