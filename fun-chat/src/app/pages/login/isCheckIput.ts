import { ALPHA_UPPER, NUMBERS } from "../../constants/index";

export default function isCheckInput(el: HTMLInputElement): boolean {
  const val: string = el.value;
  if (el.classList.contains("login__input-name")) {
    if (val.length < 4)
      throw new Error("The letters number of name must be more then 4");
    if (
      !val.split("").every((char) => ALPHA_UPPER.includes(char.toUpperCase()))
    )
      throw new Error("The letters must be in the English alphabet");
    if (val[0].toUpperCase() !== val[0])
      throw new Error("The first letter of name should be upper case");
  } else {
    if (val.length < 4)
      throw new Error("The letters number of password must be more then 4");
    if (!val.split("").some((char) => ALPHA_UPPER.includes(char.toUpperCase())))
      throw new Error("You must use at least one english alphabet");
    if (!val.split("").some((char) => NUMBERS.includes(char.toUpperCase())))
      throw new Error("You must use at least one number 0-9");
  }
  return true;
}
