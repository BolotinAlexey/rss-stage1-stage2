import getInputsElements from "../utils/getInputsElements";
import ApiLSHints from "./apiLocalStorageHints";

export default function setStartHints() {
  const apiHints = new ApiLSHints();
  const { sound, lamp } = getInputsElements();
  if (apiHints.isHint() && apiHints.getHints()) {
    if (apiHints.getHints().sound) sound.checked = true;
    if (apiHints.getHints().lamp) lamp.checked = true;
  }
}
