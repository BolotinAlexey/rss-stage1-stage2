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
}
