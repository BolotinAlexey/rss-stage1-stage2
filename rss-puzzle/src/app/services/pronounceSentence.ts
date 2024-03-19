import { DELAY_PRONOUNCE } from "../constants/index";
import { getElementDocument } from "../utils/supFunctions";
import readDataSetResultBlock from "./readDataSetResultBlock";

export default function pronounceSentence(audio: HTMLAudioElement) {
  const volumeBtn = getElementDocument(".button-volume");
  const src = readDataSetResultBlock("audioSrc");
  const fakeEl = audio;
  fakeEl.src = `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${src}`;
  let duration: number;
  setTimeout(() => {
    duration = audio.duration * 1000;
    audio.play();

    if (!volumeBtn.classList.contains("animation-volume")) {
      volumeBtn.classList.add("animation-volume");
    }
    setTimeout(() => {
      if (volumeBtn.classList.contains("animation-volume")) {
        volumeBtn.classList.remove("animation-volume");
      }
    }, duration);
  }, DELAY_PRONOUNCE);
}
