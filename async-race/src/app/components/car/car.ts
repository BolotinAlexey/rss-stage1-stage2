import { ICar } from "../../interfaces/responseData";
import "./style.scss";

export default class Car {
  id: number;

  color: string;

  name: string;

  constructor(prop: ICar) {
    this.id = prop.id;
    this.color = prop.color;
    this.name = prop.name;
  }

  // onSelect() {
  //   console.log(this.id);
  // }

  // onRemove() {
  //   console.log(this.id);
  // }

  // onStart() {
  //   console.log(this.id);
  // }

  // onStop() {
  //   console.log(this.id);
  // }
}
