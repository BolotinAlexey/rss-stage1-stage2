const ALPHA_UPPER: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";

export default function isCheckInput(el: HTMLInputElement): boolean {
  const val: string = el.value;
  if (val.length < 3) throw new Error("The letters number of name must be > 3");
  if (el.classList.contains("login__input-surname") && val.length < 4)
    throw new Error("The letters number of surname must be > 4");

  return val.split("").reduce((a, ch, i) => {
    if (!ALPHA_UPPER.split("").includes(ch.toUpperCase()))
      throw new Error("The letters must be in the English alphabet or '-'");
    if ((!i && ch.toUpperCase() !== ch) || ch === "-")
      throw new Error("The first letter should be upper case");
    if (i && ch.toLowerCase() !== ch && ch !== "-")
      throw new Error("The letters except first, should be lower case");
    return a;
  }, true);
}
