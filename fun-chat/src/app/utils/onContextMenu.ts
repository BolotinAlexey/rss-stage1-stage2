import WSApi from "../services/wsApi";
import onEditMessage from "./onEditMessage";
import { createElement } from "./supFunctions";

export default function onContextMenu(e: Event, id: string) {
  e.preventDefault();
  const openedMenu: HTMLElement | null = document.querySelector(".action-list");
  if (openedMenu) openedMenu.remove();
  const { currentTarget } = e;
  if (
    !(currentTarget instanceof HTMLElement) ||
    !currentTarget.classList.contains("right-message") ||
    currentTarget.lastElementChild?.classList?.contains("action-list")
  ) {
    return;
  }
  const wrap = createElement("ul", ["action-list"]);
  const del = createElement("li", ["action-del"], "DELETE");
  const edit = createElement("li", ["action-edit"], "EDIT");
  wrap.append(del, edit);
  if (currentTarget.classList.contains("right-message")) {
    wrap.classList.add("left-action");
  } else {
    wrap.classList.add("right-action");
  }
  currentTarget.append(wrap);
  del.addEventListener("click", () => {
    wrap.remove();
    WSApi.deleteMessage(id);
  });

  edit.addEventListener("click", () => {
    wrap.remove();
    const textHtml = currentTarget.querySelector(".message__text");
    const text = textHtml?.textContent;
    if (text) onEditMessage(id, text);
  });
}
