import onMessageTextarea from "../../utils/onMessageTextarea";
import { createElement } from "../../utils/supFunctions";

export default function createMessagesSection(): HTMLElement {
  const section: HTMLElement = createElement("section", [
    "section",
    "messages",
  ]);
  const statusBar: HTMLElement = createElement("div", ["messages__status"]);

  const messageField: HTMLElement = createElement("div", ["messages__field"]);

  const form = createElement<HTMLFormElement>("form", ["messages__form"]);

  const input: HTMLInputElement = createElement<HTMLInputElement>("input", [
    "messages__input",
  ]);

  const submitBtn: HTMLButtonElement = createElement<HTMLButtonElement>(
    "button",
    ["messages__button"],
    "SEND",
  );

  input.disabled = true;
  submitBtn.disabled = true;
  submitBtn.type = "submit";

  form.append(input, submitBtn);

  section.append(statusBar, messageField, form);
  form.addEventListener("submit", (e) => {
    submitBtn.disabled = true;
    onMessageTextarea(e);
  });
  input.addEventListener("input", () => {
    submitBtn.disabled = !input.value;
  });

  return section;
}
