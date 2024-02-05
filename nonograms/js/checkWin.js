export default function checkWin() {
  const bools = document.querySelectorAll("[data-bool]");
  return [...bools].every((el) => el.dataset.bool === el.dataset.fill);
}
