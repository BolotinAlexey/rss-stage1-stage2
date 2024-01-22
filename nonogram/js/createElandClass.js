export default function createElandClass(tag, classList, text) {
  const node = document.createElement(tag);
  node.classList.add(...classList);
  node.innerText = text ? text : "";
  return node;
}
