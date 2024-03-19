import { getElementDocument } from "./supFunctions";

export default function getInputsElements() {
  const lamp = getElementDocument(".game__hint-lamp");
  const sound = getElementDocument(".game__hint-sound");
  if (
    !(lamp instanceof HTMLInputElement) ||
    !(sound instanceof HTMLInputElement)
  ) {
    throw new Error("Element isn't HTMLInputElement");
  }
  return { lamp, sound };
}
