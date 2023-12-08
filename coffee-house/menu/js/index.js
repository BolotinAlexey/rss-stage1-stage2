import items from "../../assets/items.js";
import showCardList from "./showCardList.js";
import getRefs from "./getRefs.js";

const { tab, tabInputs, cards } = getRefs();
tab.addEventListener("click", onTab);
onTab(null);

function onTab(e) {
  if (e?.target?.tagName !== "INPUT" && e) return;
  const category = e ? e.target.dataset.name : "coffee";

  cards.innerHTML = showCardList(category, 8);
}
