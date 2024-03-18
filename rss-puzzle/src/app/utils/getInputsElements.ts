import { getElementDocument } from "./supFunctions";

export default function getInputsElements() {
  const lamp = getElementDocument(".game__hint-lamp");
  if (!(lamp instanceof HTMLInputElement)) {
    throw new Error("Element isn't HTMLInputElement");
  }
  return { lamp };
}
