import { getElementDocument } from "../utils/supFunctions";

export default function enabledContinueButton(onEnable: boolean) {
  const btn = getElementDocument<HTMLButtonElement>(".game__btn-continue");
  btn.disabled = onEnable;
}
