import { ICar } from "../interfaces/responseData";

export default function actionBtnGenerate(e: Event, car: ICar) {
  const { target } = e;
  if (!(target instanceof HTMLButtonElement)) throw new Error(`${target} isn't HTMLButtonElement`);
  const idBtn = target.id;
  console.log(idBtn, car);
}
