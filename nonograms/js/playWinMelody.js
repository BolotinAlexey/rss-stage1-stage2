export default function playWinMelody(audio, audioFon) {
  const isFonMelody = document.querySelector(".melody-button__input").checked;
  if (isFonMelody) audioFon.pause();
  audio.src = "./assets/sounds/win.mp3";
  audio.play();
  if (isFonMelody) setTimeout(() => audioFon.play(), 5500);
}
