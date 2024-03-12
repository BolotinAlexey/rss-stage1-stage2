export type User = Required<Record<"name" | "surname", "string">>;

export interface Login {
  form: HTMLFormElement;
  nameInput: HTMLInputElement;
  surnameInput: HTMLInputElement;
}
