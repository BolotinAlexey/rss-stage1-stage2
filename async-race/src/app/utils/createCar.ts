import IPage from "../interfaces/IPage";
import ApiCars from "../services/apiCars";

export default async function createCar(
  name: string,
  color: string,
  page: IPage,
) {
  const apiCars = new ApiCars();
  await apiCars.createCar({ name, color });
  // const car = await apiCars.createCar({ name, color });
  const fakePage = page;
  if ("setCars" in fakePage) {
    fakePage.setCars = await apiCars.getCars();
  }
}
