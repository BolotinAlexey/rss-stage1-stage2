import alphaArr from "../assets/alpha.js";
import generateKey from "./generateKey.js";
import onKey from "./index.js";
// import onKey from "./onKey.js";

const body = document.querySelector("body");

export default function generateKeyboard(isRepeat) {
  if (!isRepeat) {
    const section = document.createElement("section");
    section.classList.add("section", "keyboard");
    body.append(section);
    const list = document.createElement("ul");
    list.classList.add("section__list", "keyboard__list");
    section.append(list);
    list.addEventListener("click", onKey);
  } else {
    list.innerHTML = "";
  }
  const keyboardStr = alphaArr.reduce(generateKey, "");
  list.insertAdjacentHTML("afterbegin", keyboardStr);
}
