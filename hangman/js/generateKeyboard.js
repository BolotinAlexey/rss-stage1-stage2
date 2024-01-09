import alphaArr from "../assets/alpha.js";
import generateKey from "./generateKey.js";
import onKey from "./onKey.js";

const body = document.querySelector("body");

export default function generateKeyboard() {
  const section = document.createElement("section");
  section.classList.add("section", "keyboard");
  body.append(section);
  const list = document.createElement("ul");
  list.classList.add("section__list", "keyboard__list");
  section.append(list);
  const keyboardStr = alphaArr.reduce(generateKey, "");
  list.insertAdjacentHTML("afterbegin", keyboardStr);
  list.addEventListener("click", onKey);
}
