export default function calculateClues(arr) {
  const leftTotal = [];
  const topTotal = [];

  for (let i = 0; i < arr.length; i += 1) {
    const left = [];
    const top = [];
    for (let j = 0, numLeft = 0, numTop = 0; j < arr.length; j += 1) {
      // top parse
      if (arr[j][i]) {
        numTop++;

        if (j === arr.length - 1) top.push(numTop);
      } else if (numTop) {
        top.push(numTop);
        numTop = 0;
      }

      // left parse
      if (arr[i][j]) {
        numLeft++;
        if (j === arr[0].length - 1) {
          left.push(numLeft);
        }
      } else if (numLeft) {
        left.push(numLeft);
        numLeft = 0;
      }
    }
    leftTotal.push(left);
    topTotal.push(top);
  }
  return { leftTotal, topTotal };
}
