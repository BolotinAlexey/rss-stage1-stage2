import IPage from "../interfaces/IPage";
import ApiCars from "../services/apiCars";

export default async function createCar(
  name: string,
  color: string,
  page: IPage,
) {
  const apiCars = new ApiCars();
  const car = await apiCars.createCar({ name, color });
  console.log(car);
  const fakePage = page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await apiCars.getCars();
  }
  // if ("refreshCars" in fakePage && refreshCars typeof function) {
  //   fakePage.refreshCars();
  // }
}
