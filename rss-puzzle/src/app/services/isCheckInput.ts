export default function isCheckInput(el: HTMLInputElement): boolean {
  const val: string = el.value;
  if (val.length < 4) return false;
  if (el.classList.contains("login__input-name") && val.length < 3)
    return false;

  return val.split("").reduce((a, ch, i) => {
    if (!i && ch.toUpperCase() !== ch) return false;
    if (ch.toLowerCase() !== ch || ch !== "-") return false;
    return a;
  }, true);
}
