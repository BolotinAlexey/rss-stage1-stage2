import { Login } from "../interfaces/index";
import { createElement } from "../utils/supFunctions";

export default function createForm(): Login {
  const form = createElement<HTMLFormElement>("form", ["login__form"]);
  const nameInput = createElement<HTMLInputElement>("input", [
    "login__input",
    "login__input-name",
  ]);
  const surnameInput = createElement<HTMLInputElement>("input", [
    "login__input",
    "login__input-surname",
  ]);
  const submitBtn = createElement<HTMLButtonElement>(
    "button",
    ["login__input", "login__input-submit"],
    "LOGIN",
  );
  submitBtn.type = "submit";
  submitBtn.disabled = true;
  nameInput.placeholder = "Enter your name";
  surnameInput.placeholder = "Enter your surname";
  nameInput.required = true;
  surnameInput.required = true;

  form.append(nameInput, surnameInput, submitBtn);
  return { form, nameInput, surnameInput };
}
