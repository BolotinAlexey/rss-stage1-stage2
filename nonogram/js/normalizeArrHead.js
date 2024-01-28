export default function normaliseArrHead(arr, maxTop) {
  arr.forEach((clue) => clue.reverse());
  console.log(arr);
  return new Array(maxTop)
    .fill(0)
    .map((_, i) => {
      return arr.reduce((a, glue) => {
        if (glue[i]) return [...a, glue[i]];
        return [...a, null];
      }, []);
    })
    .reverse();
  // return arr.map((el) => el.join("").padStart(maxTop, "0").split(""));
}
