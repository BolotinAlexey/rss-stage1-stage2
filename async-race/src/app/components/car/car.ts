import { ICar } from "../../interfaces/responseDataCar";
import "./style.scss";

export default class Car implements ICar {
  id: number;

  color: string;

  name: string;

  idFrame: number | null = null;

  html?: HTMLElement | null = null;

  constructor(prop: ICar) {
    this.id = prop.id;
    this.color = prop.color;
    this.name = prop.name;
  }

  // public set setHTML(v : HTMLElement) {
  //   this.carHTML = v;
  // }

  // public get getHTML(): HTMLElement {
  //   return this.carHTML;
  // }
}
