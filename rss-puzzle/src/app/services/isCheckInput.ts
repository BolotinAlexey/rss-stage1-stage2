const ALPHA_UPPER: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
export default function isCheckInput(el: HTMLInputElement): boolean {
  const val: string = el.value;
  if (val.length < 3) return false;
  if (el.classList.contains("login__input-surname") && val.length < 4)
    return false;

  return val.split("").reduce((a, ch, i) => {
    if (!ALPHA_UPPER.split("").includes(ch.toUpperCase())) return false;
    if ((!i && ch.toUpperCase() !== ch) || ch === "-") return false;
    if (i && ch.toLowerCase() !== ch && ch !== "-") return false;
    return a;
  }, true);
}
