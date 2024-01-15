export default function onKey({ target }) {
  let keyNode;
  if (target.tagName === "BUTTON") keyNode = target.parentNode;
  else if (target.tagName === "LI") keyNode = target;
  else return;
  return keyNode.dataset.key;
}
