import { TIME_SHOW_MESSAGE } from "../constants/index";
import { createElement, getElementDocument } from "./supFunctions";

export default function notify(
  msg: string,
  isError: boolean,
  isInfinite?: boolean,
) {
  const wrap = createElement("div", ["notify-wrap"]);
  const msgHtml = createElement("div", ["notify-msg"], msg);
  wrap.append(msgHtml);
  if (isError) {
    wrap.classList.add("error-bg");
  } else {
    wrap.classList.add("success-bg");
  }
  const body = getElementDocument("body");
  body.append(wrap);
  if (!isInfinite) setTimeout(() => wrap.remove(), TIME_SHOW_MESSAGE);
}
