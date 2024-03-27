import Track from "../components/track/track";
import { ICar } from "../interfaces/responseData";
import { getElementDocument } from "../services/supFunctions";
import StoreCars from "../store/cars";

export default function onSelectCar(car: ICar, track: Track) {
  const fakeTrack = track;
  // if ("setCar" in fakeTrack.page) fakeTrack.page.setCar = car;
  StoreCars.setCar = car;
  const formUpdate = getElementDocument<HTMLFormElement>(".page__form_update");
  if (!(formUpdate[0] instanceof HTMLInputElement))
    throw new Error(`${formUpdate[0]} isn't instanceof HTMLInputElement`);
  if (!(formUpdate[1] instanceof HTMLInputElement))
    throw new Error(`${formUpdate[1]} isn't instanceof HTMLInputElement`);
  formUpdate[0].value = car.name;
  formUpdate[1].value = car.color;
  formUpdate[0].focus();
}
