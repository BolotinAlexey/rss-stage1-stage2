import { createElement } from "../../utils/supFunctions";

export default function createFormElements() {
  const form = createElement<HTMLFormElement>("form", ["login__form"]);

  const nameLabel = createElement<HTMLElement>("label", [
    "login__label",
    "login__label-login",
  ]);
  const passwordLabel = createElement<HTMLElement>("label", [
    "login__label",
    "login__label-password",
  ]);

  const nameSpan = createElement<HTMLElement>("span", ["login__span"]);
  const passwordSpan = createElement<HTMLElement>("span", ["login__span"]);
  const nameInput = createElement<HTMLInputElement>("input", [
    "login__input",
    "login__input-login",
  ]);

  const passwordInput = createElement<HTMLInputElement>("input", [
    "login__input",
    "login__input-password",
  ]);

  const submitBtn = createElement<HTMLButtonElement>(
    "button",
    ["login__input", "login__input-submit"],
    "LOGIN",
  );
  return {
    form,
    nameLabel,
    passwordLabel,
    nameSpan,
    passwordSpan,
    nameInput,
    passwordInput,
    submitBtn,
  };
}
