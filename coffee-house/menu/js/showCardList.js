import getCard from "./getCard.js";

export default function showCardList(categoryItems, maxIndex) {
  return categoryItems.reduce(
    (a, el, i) => (i < maxIndex ? a + getCard({ ...el, index: i + 1 }) : a),
    ""
  );
}
