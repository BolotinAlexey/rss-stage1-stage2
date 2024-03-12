import { Login } from "../interfaces/index";
import createFormElements from "../utils/createFormElements";

export default function createForm(): Login {
  const {
    form,
    nameLabel,
    surnameLabel,
    nameSpan,
    surnameSpan,
    nameInput,
    surnameInput,
    submitBtn,
  } = createFormElements();
  submitBtn.type = "submit";
  submitBtn.disabled = true;
  nameInput.placeholder = "Enter your name";
  surnameInput.placeholder = "Enter your surname";
  nameInput.required = true;
  surnameInput.required = true;
  nameInput.name = "name";
  surnameInput.name = "surname";

  nameLabel.append(nameInput, nameSpan);
  surnameLabel.append(surnameInput, surnameSpan);
  form.append(nameLabel, surnameLabel, submitBtn);
  return { form, nameInput, surnameInput };
}
