import Login from "../../interfaces/login";
import createFormElements from "./createFormElements";

export default function createForm(): Login {
  const {
    form,
    nameLabel,
    passwordLabel,
    nameSpan,
    passwordSpan,
    nameInput,
    passwordInput,
    submitBtn,
  } = createFormElements();
  submitBtn.type = "submit";
  submitBtn.disabled = true;
  nameInput.placeholder = "Enter your name";
  passwordInput.placeholder = "Enter your surname";
  nameInput.required = true;
  passwordInput.required = true;
  nameInput.name = "login";
  passwordInput.name = "password";
  passwordInput.type = "password";

  nameLabel.append(nameInput, nameSpan);
  passwordLabel.append(passwordInput, passwordSpan);
  form.append(nameLabel, passwordLabel, submitBtn);
  return { form, nameInput, passwordInput };
}
