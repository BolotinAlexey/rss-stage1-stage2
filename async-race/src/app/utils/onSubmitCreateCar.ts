import Track from "../components/track/track";
import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";
import ApiCars from "../services/apiCars";
import StoreCars from "../store/cars";
import StoreTrack from "../store/track";
import createCar from "./createCar";

export default async function onSubmitCreateCar(
  e: Event,
  action: Action,
  page: IPage,
) {
  e.preventDefault();
  const { target } = e;

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
  if (action === "create" && target.elements[0].value) {
    createCar(name.value, color.value, page);
    target.reset();
  }

  if (action === "update" && StoreCars.getCar) {
    await ApiCars.updateCar({
      id: StoreCars.getCar.id,
      name: name.value,
      color: color.value,
    });
    const tr: Track | null = StoreTrack.getTrack;
    if (tr) tr.loadCars();
    target.reset();

    Object.values(target).forEach(
      (el: HTMLInputElement | HTMLButtonElement) => {
        const fakeEl = el;
        fakeEl.disabled = true;
      },
    );
  }
}
