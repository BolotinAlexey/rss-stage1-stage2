export default function isPuzzle(target: EventTarget | null) {
  return (
    target &&
    target instanceof HTMLElement &&
    target.classList.contains("puzzle")
  );
}
