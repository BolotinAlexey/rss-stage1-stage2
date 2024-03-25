// eslint-disable-next-line import/no-cycle
import Garage from "./garage-view";

export default async function refreshCars(garage: Garage) {
  const page: HTMLElement = garage.getHTMLElement();
  const title = page.querySelector(".title");
  if (title?.textContent)
    title.textContent = `${garage.namePage} (${garage.count})`;
  const num = page.querySelector(".page-num");
  if (num?.textContent) num.textContent = `Page: #${garage.num}`;
}
