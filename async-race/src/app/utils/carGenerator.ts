import brands from "../assets/brands";
import { MAX_COLOR_NUMBER } from "../constants/index";
import DataCar from "../interfaces/dataCar";

export default function carGenerator(): DataCar {
  const name1: string = brands[(Math.random() * brands.length) ^ 0];
  const name2: string = brands[(Math.random() * brands.length) ^ 0];
  if (name1 === name2) return carGenerator();
  const color: string = `#${Math.floor(Math.random() * MAX_COLOR_NUMBER).toString(16)}`;
  return { name: `${name1}_${name2}`, color };
}
