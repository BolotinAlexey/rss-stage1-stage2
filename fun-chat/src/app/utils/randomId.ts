export default function randomId(): string {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
}
