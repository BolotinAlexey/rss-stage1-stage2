export default function saveGame(nonogramNode) {
  console.log(nonogramNode.innerHTML);
  localStorage.setItem("nonograme", nonogramNode.innerHTML);
}
