import IPage from "../interfaces/IPage";
import formCarGenerate from "./formCarGenerate";
import setPageTitle from "./setPageTitle";

export default function commonPageGenerate(page: IPage) {
  formCarGenerate("create", page);
  formCarGenerate("update", page);
  setPageTitle(page);
}
