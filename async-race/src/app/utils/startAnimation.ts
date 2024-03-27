import { CAR_OFFSET, FRAME_FREQUENCY } from "../constants/index";
import { ICar } from "../interfaces/responseData";

export default function startAnimation(
  car: ICar,
  duration: number,
): number | null {
  if (!car.html) return null;
  const w: number = window.innerWidth - CAR_OFFSET;
  const delta: number = (w * 1000 * FRAME_FREQUENCY) / duration;
  let distance: number = 0;
  return requestAnimationFrame(step);

  function step() {
    distance += delta;
    if (!car.html) return;
    car.html.style.transform = "translateX(" + distance + "px)";
    if (distance > w) {
      car.html.style.transform = "translateX(" + w + "px)";
      return;
    }

    requestAnimationFrame(step);
  }
}
