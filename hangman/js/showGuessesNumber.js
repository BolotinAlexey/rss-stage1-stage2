export default function showGuessesNumber(guesses) {
  const guessesNodeNumber = document.querySelector(".section-text__number");
  console.log(guessesNodeNumber);
  guessesNodeNumber.innerHTML = `${6 - guesses} / 6`;
  switch (guesses) {
    case 4:
      guessesNodeNumber.classList.remove("section-text__number_fine");
      guessesNodeNumber.classList.add("section-text__number_warn");
      console.log(console.log(guesses));
      break;
    case 2:
      guessesNodeNumber.classList.remove("section-text__number_warn");
      guessesNodeNumber.classList.add("section-text__number_danger");
      console.log(guesses);
      break;

    default:
      break;
  }
}
