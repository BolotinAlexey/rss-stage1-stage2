import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";
import { createElement } from "../services/supFunctions";
import onSubmitCar from "./onSubmitCar";

export default function formCarGenerate(action: Action, page: IPage) {
  const form = createElement<HTMLFormElement>("form", [
    "form",
    `page__form_${action}`,
  ]);
  const inputName = createElement<HTMLInputElement>("input", [
    "input",
    `form__input_name`,
  ]);
  const inputColor = createElement<HTMLInputElement>("input", [
    "input",
    `form__input_color`,
  ]);
  const buttonSubmit = createElement<HTMLButtonElement>(
    "button",
    ["button", `form__input_submit`],
    action,
  );
  form.append(inputName, inputColor, buttonSubmit);
  page.getHTMLElement().append(form);
  form.addEventListener("submit", (e: Event) => onSubmitCar(e, action, page));
}
