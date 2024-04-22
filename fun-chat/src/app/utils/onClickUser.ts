import WSApi from "../services/wsApi";
import { createElement, getElementDocument } from "./supFunctions";

export default function onClickUser(e: Event, status: "active" | "inactive") {
  const { target } = e;
  if (!(target instanceof HTMLElement) || target.tagName !== "LI") return;
  const parent = getElementDocument(".messages__status");
  const userLogin = target.innerText.split("\n")[0];
  const userHtml = createElement(
    "span",
    ["message__status-user"],
    userLogin || "",
  );
  const statusHtml = createElement("span", ["message__status-status"], status);
  statusHtml.style.color = status === "active" ? "green" : "red";

  parent.innerHTML = "";
  parent.append(userHtml, statusHtml);

  const input = <HTMLInputElement>getElementDocument(".messages__input");
  input.disabled = false;
  WSApi.sendRequestMessages(userLogin);
}
