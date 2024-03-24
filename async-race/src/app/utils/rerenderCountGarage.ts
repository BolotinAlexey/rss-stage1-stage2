import ApiCars from "../services/apiCars";
import { getElementDocument } from "../services/supFunctions";

export default async function rerenderCountGarage(pageName: string) {
  const title = getElementDocument(`.${pageName}`);
  const api = new ApiCars();
  const content = await api.getCars();
  title.innerText = `${pageName} (${content.length})`;
  console.log(content);
}
