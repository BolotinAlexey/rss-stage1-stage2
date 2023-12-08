import items from "../../assets/items.js";
import getCard from "./getCard.js";

export default function showCardList(category, maxIndex) {
  return items
    .filter((el) => el.category === category)
    .reduce(
      (a, el, i) => (i <= maxIndex ? a + getCard({ ...el, index: i + 1 }) : a),
      ""
    );
}
