import { ICar } from "../../interfaces/responseData";
import createCarMarkup from "../../utils/createCarMarkup";
import "./style.scss";

export default class Car {
  id: number;

  color: string;

  name: string;

  constructor(prop: ICar) {
    this.id = prop.id;
    this.color = prop.color;
    this.name = prop.name;
    // createCarMarkup(this);
  }
}
