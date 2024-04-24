import WSApi from "../services/wsApi";
import UsersMsgsStore from "../store/usersMsgsStore.ts/index";
import { createElement, getElementDocument } from "./supFunctions";

export default function onClickUser(e: Event, status: "active" | "inactive") {
  UsersMsgsStore.editedId = null;
  const { target } = e;
  if (!(target instanceof HTMLElement) || target.tagName !== "LI") return;
  const parent = getElementDocument(".messages__status");
  const userLogin = target.innerText.split("\n")[0];
  const currentStatusUserHtml: HTMLElement | null = document.querySelector(
    ".message__status-user",
  );
  const currentStatusUser: string | undefined | null =
    currentStatusUserHtml?.textContent;
  if (currentStatusUser === userLogin) return;

  const form = getElementDocument<HTMLFormElement>(".messages__form");
  form.reset();

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
