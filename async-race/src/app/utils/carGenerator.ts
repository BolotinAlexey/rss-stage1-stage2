import brands from "../assets/brands";
import DataCar from "../interfaces/dataCar";

export default function carGenerator(): DataCar {
  const name1: string = brands[(Math.random() * brands.length) ^ 0];
  const name2: string = brands[(Math.random() * brands.length) ^ 0];
  const color: string = `#${Math.floor(Math.random() * 16000000).toString(16)}`;
  return { name: `${name1}_${name2}`, color };
}
