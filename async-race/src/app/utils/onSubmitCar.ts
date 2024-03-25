import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";

export default function onSubmitCar(e: Event, action: Action, page: IPage) {
  e.preventDefault();
  const { target } = e;
  if (!(target instanceof HTMLFormElement))
    throw new Error("form isn't HTMLFormElement type");
  if(target.elements[1] instanceof HTMLInputElement)
  console.log(target.elements[1].value);
  
  if (action === "create") {
  }
}
