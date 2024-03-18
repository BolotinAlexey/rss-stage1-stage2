import readDataSetResultBlock from "./readDataSetResultBlock";

export default function pronounceSentence(audio: HTMLAudioElement) {
  const src = readDataSetResultBlock("audioSrc");
  console.log(src);
  const fakeEl = audio;
  fakeEl.src = `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${src}`;
  audio.play();
}
