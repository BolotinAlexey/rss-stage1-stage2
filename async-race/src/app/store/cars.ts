// import DataCar from "../interfaces/dataCar";
// import { ICar } from "../interfaces/responseData";
// // eslint-disable-next-line import/no-cycle
// import { Garage } from "../pages/index";
// import ApiCars from "../services/apiCars";

// export default class StoreCars {
//   apiCars = new ApiCars();

//   garage: Garage;

//   cars: ICar[] = [];

//   constructor() {
//     this.getCars();
//   }

//   async getCars() {
//     this.cars = await this.apiCars.getCars();
//     if (!this.cars) this.cars = [];
//   }

//   async setCar({ name, color }: DataCar) {
//     const car = await this.apiCars.createCar({ name, color });
//     this.cars = await this.apiCars.getCars();
//     this.garage.cars = this.cars;
//   }
// }
