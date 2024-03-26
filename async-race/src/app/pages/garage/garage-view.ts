import Page from "../../components/page/page";
import Track from "../../components/track/track";
import { ICar } from "../../interfaces/responseData";
import ApiCars from "../../services/apiCars";
import createPrevNext from "../../utils/createPrevNext";
import refreshTitles from "../../utils/refreshTitles";
import "./style.scss";

export default class Garage extends Page {
  private cars: ICar[] = [];

  apiCars = new ApiCars();

  track: Track;

  constructor() {
    super("garage");
    this.track = new Track(this);
    this.getHTMLElement().append(this.track.getHTMLElement());
    createPrevNext(this);
  }

  public set setCars(v: ICar[]) {
    this.cars = v;
    this.count = this.cars.length;
    refreshTitles(this);
  }

  public get getCars(): ICar[] {
    return this.cars;
  }
}
