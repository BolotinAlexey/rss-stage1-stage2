import IPage from "../interfaces/IPage";
import formCarGenerate from "./formCarGenerate";
import setPageTitle from "./setPageTitle";

export default function commonPageGenerate(page: IPage) {
  if (page.namePage === "garage") {
    formCarGenerate("create", page);
    formCarGenerate("update", page);
  }
  setPageTitle(page);
}
