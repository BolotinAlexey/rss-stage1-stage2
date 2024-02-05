export default function normalizeArrLeft(arr, maxLeft) {
  return arr.map((el) => [...new Array(maxLeft - el.length).fill(null), ...el]);
}
