export default class ApiCars {
  address: string = "http://127.0.0.1:3000";

  async getCars() {
    const res: Response = await fetch(`${this.address}/garage`);
    const content = await res.json();
    return content;
  }

  async getCount(namePage: "garage" | "winners") {
    const res: Response = await fetch(`${this.address}/${namePage}`);
    const content = await res.json();
    return content.length ? content.length : 0;
  }
}
