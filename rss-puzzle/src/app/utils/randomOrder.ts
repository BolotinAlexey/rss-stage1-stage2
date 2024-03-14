export default function randomOrder(num: number): number[] {
  const set = new Set();
  while (set.size < num) {
    const randomNumber = Math.floor(Math.random() * num);
    set.add(randomNumber);
  }
  return Array.from(set) as number[];
}
