import { createElement } from "./supFunctions";

export default function createFormElements() {
  const form = createElement<HTMLFormElement>("form", ["login__form"]);
  const nameLabel = createElement<HTMLElement>("label", [
    "login__label",
    "login__label-name",
  ]);
  const surnameLabel = createElement<HTMLElement>("label", [
    "login__label",
    "login__label-surname",
  ]);
  const nameSpan = createElement<HTMLElement>("span", ["login__span"]);
  const surnameSpan = createElement<HTMLElement>("span", ["login__span"]);
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
  return {
    form,
    nameLabel,
    surnameLabel,
    nameSpan,
    surnameSpan,
    nameInput,
    surnameInput,
    submitBtn,
  };
}
