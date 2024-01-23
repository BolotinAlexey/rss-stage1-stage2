export default function normaliseArr(arr, maxTop) {
  return new Array(maxTop).fill(0).map((_, i) => {
    return arr.reduce((a,glue) => {
      if(glue[i]) return [...a,glue[i]]
      return [...a,null]
    },[]);
  }).reverse();
  // return arr.map((el) => el.join("").padStart(maxTop, "0").split(""));
}
