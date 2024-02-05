export default function countFill(arr) {
  return arr.reduce(
    (a, row) => a + row.reduce((acc, glue) => acc + +glue, 0),
    0
  );
}
