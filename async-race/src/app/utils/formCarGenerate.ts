import Button from "../components/button/button";
import Input from "../components/input/input";
import IPage from "../interfaces/IPage";
import Action from "../interfaces/action";
import { createElement } from "../services/supFunctions";
import onSubmitCar from "./onSubmitCar";

export default function formCarGenerate(action: Action, page: IPage) {
  const form = createElement<HTMLFormElement>("form", [
    "form",
    `page__form_${action}`,
  ]);

  const inputName = new Input("form__input_name", "text");

  const inputColor = new Input("form__input_color", "color");
  inputColor.getHTMLElement().value = "#aaaaaa";

  const buttonSubmit = new Button("form__input_submit", action, (e: Event) =>
    onSubmitCar(e, action, page),
  );

  form.append(
    inputName.getHTMLElement(),
    inputColor.getHTMLElement(),
    buttonSubmit.getHTMLElement(),
  );
  page.getHTMLElement().append(form);
  form.addEventListener("submit", (e: Event) => onSubmitCar(e, action, page));
}
