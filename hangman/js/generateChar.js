export default function generateChar(a, char) {
  return (
    a +
    `<li class="answer__item" data-char="${char}">
  <span class="answer__char">${char}</span>
</li>
`
  );
}
