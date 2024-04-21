import { createElement, getElementDocument } from "./supFunctions";

export default function onClickUser(e: Event, status: "active" | "inactive") {
  const { target } = e;
  if (!(target instanceof HTMLElement) || target.tagName !== "LI") return;
  const parent = getElementDocument(".messages__status");
  const userHtml = createElement(
    "span",
    ["message__status-user"],
    target.textContent || "",
  );
  const statusHtml = createElement("span", ["message__status-status"], status);
  statusHtml.style.color = status === "active" ? "green" : "red";

  parent.innerHTML = "";
  parent.append(userHtml, statusHtml);

  const input = <HTMLInputElement>getElementDocument(".messages__input");
  input.disabled = false;
}
