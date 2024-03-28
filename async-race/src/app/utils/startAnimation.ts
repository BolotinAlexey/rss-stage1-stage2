import { CAR_OFFSET, FRAME_FREQUENCY } from "../constants/index";
import { ICar } from "../interfaces/responseData";

export default function startAnimation(car: ICar, duration: number) {
  if (!car.html) return;
  const w: number = window.innerWidth - CAR_OFFSET;
  const delta: number = (w * 280 * FRAME_FREQUENCY) / duration;
  let distance: number = 0;
  car.idFrame = requestAnimationFrame(step);

  function step() {
    distance += delta;
    if (!car.html) return;
    car.html.style.transform = "translateX(" + distance + "px)";
    if (distance > w) {
      car.html.style.transform = "translateX(" + w + "px)";
      return;
    }

    car.idFrame = requestAnimationFrame(step);
  }
}
