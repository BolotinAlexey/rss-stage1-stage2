import Page from "../../components/page/page";
import Track from "../../components/track/track";
import { ICar } from "../../interfaces/responseData";
import StoreTrack from "../../store/track";
import refreshTitles from "../../utils/refreshTitles";
import "./style.scss";

export default class Garage extends Page {
  private cars: ICar[] = [];

  car: ICar | null = null;

  constructor() {
    super("garage");
    StoreTrack.setTrack = new Track(this);
    const tr = StoreTrack.getTrack;
    if (tr) this.getHTMLElement().append(tr.getHTMLElement());
  }

  public set setCars(cars: ICar[]) {
    this.cars = cars;
    this.count = this.cars.length;
    refreshTitles(this);
  }

  public get getCars(): ICar[] {
    return this.cars;
  }

  public set setNum(num: number) {
    this.num = num;
    refreshTitles(this);
    const tr: Track | null = StoreTrack.getTrack;
    if (tr) tr.loadCars();
  }

  public set setCar(car: ICar) {
    this.car = car;
    const tr: Track | null = StoreTrack.getTrack;
    if (tr) tr.loadCars();
  }

  public get getCar(): ICar | null {
    return this.car;
  }
}
