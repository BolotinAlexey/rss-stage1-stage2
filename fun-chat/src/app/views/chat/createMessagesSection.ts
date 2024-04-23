import UsersMsgsStore from "../../store/usersMsgsStore.ts/index";
import onMessageUser from "../../utils/onMessageUser";
import resetUnreadingStatus from "../../utils/resetUnreadingStatus";
import { createElement } from "../../utils/supFunctions";

export default function createMessagesSection(): HTMLElement {
  const section: HTMLElement = createElement("section", [
    "section",
    "messages",
  ]);
  const statusBar: HTMLElement = createElement("div", ["messages__status"]);
  const messageField: HTMLElement = createElement("div", ["messages__field"]);
  messageField.addEventListener("wheel", () => {
    if (!UsersMsgsStore.isScroll) resetUnreadingStatus();
  });
  messageField.addEventListener("click", resetUnreadingStatus);
  const form = createElement<HTMLFormElement>("form", ["messages__form"]);
  const input: HTMLInputElement = createElement<HTMLInputElement>("input", [
    "messages__input",
  ]);
  input.placeholder = "Message..";
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
    onMessageUser(e);
    resetUnreadingStatus();
  });
  input.addEventListener("input", () => {
    submitBtn.disabled = !input.value;
  });

  return section;
}
