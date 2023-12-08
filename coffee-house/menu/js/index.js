import items from "../../assets/items.js";
import getRefs from "./getRefs.js";

const { tab, tabInputs } = getRefs();
tab.addEventListener("click", onTab);
console.log(items);

function onTab(e) {
  if (e.target.tagName !== "INPUT") return;
  console.log(e.target.dataset.name);
}
