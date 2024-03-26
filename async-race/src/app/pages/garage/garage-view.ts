import Page from "../../components/page/page";
import Track from "../../components/track/track";
import { ICar } from "../../interfaces/responseData";
import refreshTitles from "../../utils/refreshTitles";
import "./style.scss";

export default class Garage extends Page {
  private cars: ICar[] = [];

  track: Track;

  constructor() {
    super("garage");
    this.track = new Track(this);
    this.getHTMLElement().append(this.track.getHTMLElement());
  }

  public set setCars(v: ICar[]) {
    this.cars = v;
    this.count = this.cars.length;
    refreshTitles(this);
  }

  public get getCars(): ICar[] {
    return this.cars;
  }

  public set setNum(num: number) {
    this.num = num;
    refreshTitles(this);
    this.track.loadCars();
  }
}
