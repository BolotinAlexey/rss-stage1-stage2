import { CAR_OFFSET, FRAME_FREQUENCY } from "../constants/index";
import { ICar } from "../interfaces/responseDataCar";

export default function startAnimation(car: ICar, duration: number) {
  if (!car.html) return;

  const w: number = window.innerWidth - CAR_OFFSET;
  const delta: number = (w * FRAME_FREQUENCY) / duration;
  let distance: number = 0;
  const fakeCar = car;

  function step() {
    distance += delta;
    if (!fakeCar.html) return;
    fakeCar.html.style.transform = `translateX(${distance}px)`;
    if (distance > w) {
      fakeCar.html.style.transform = `translateX(${w}px)`;
      return;
    }
    fakeCar.idFrame = requestAnimationFrame(step);
  }

  fakeCar.idFrame = requestAnimationFrame(step);
}
