import getInputsElements from "../utils/getInputsElements";
import ApiLSHints from "./apiLocalStorageHints";

export default function recordToLS() {
  const { lamp, sound } = getInputsElements();
  const apiHints = new ApiLSHints();
  apiHints.setHints({ lamp: lamp.checked, sound: sound.checked });
}
