import { User } from "../interfaces/index";
import isValidUser from "../utils/isValidUser";
import ApiLS from "./apiLocalStorage";

export default function submitLogin(e: Event) {
  e.preventDefault();

  if (!(e.currentTarget instanceof HTMLFormElement)) return;
  const formData = e.currentTarget.elements;
  const userObj: User | {} = Object.values(formData).reduce((a, b) => {
    if (!(b instanceof HTMLInputElement)) return a;
    if (b.tagName === "INPUT") return { ...a, [b.name]: b.value };
    return a;
  }, {});
  const apiUser = new ApiLS();

  if (!isValidUser(userObj)) return;
  apiUser.setUser(userObj);
}
