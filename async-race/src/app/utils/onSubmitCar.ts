import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";

export default function onSubmitCar(e: Event, action: Action, page: IPage) {
  console.log(page);
  e.preventDefault();
  const { target } = e;
  if (!(target instanceof HTMLFormElement))
    throw new Error("form isn't HTMLFormElement type");
  if (action === "create") {
  }
}
