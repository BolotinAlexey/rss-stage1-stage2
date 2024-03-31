// eslint-disable-next-line import/no-cycle
import Page from "../components/page/page";
import View from "../views/view";
import { ICar } from "./responseDataCar";

export default interface ITrack extends View {
  cars: ICar[];
  page: Page;
  loadCars: () => Promise<void>;
  refreshCars: () => Promise<void>;
}
