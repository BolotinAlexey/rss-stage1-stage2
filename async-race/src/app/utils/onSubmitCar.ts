import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";
import createCar from "./createCar";

export default function onSubmitCar(e: Event, action: Action, page: IPage) {
  e.preventDefault();
  const { target } = e;
  console.log(target);

  if (!(target instanceof HTMLFormElement))
    throw new Error("form isn't HTMLFormElement type");
  if (
    !(
      target.elements[0] instanceof HTMLInputElement &&
      target.elements[1] instanceof HTMLInputElement
    )
  )
    throw new Error("isn't instanceof HTMLInputElement");

  const [name, color] = Object(target.elements);
  if (action === "create") createCar(name.value, color.value, page);
}
