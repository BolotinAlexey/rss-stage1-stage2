export default function normaliseArr(arr, maxTop) {
  return new Array(maxTop).fill(0).map((row, i) => {
    return arr.map((glue) => {
      // if(glue.length>=i)
    });
  });
  return arr.map((el) => el.join("").padStart(maxTop, "0").split(""));
}
