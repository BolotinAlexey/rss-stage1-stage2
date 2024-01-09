export default function generateKey(a, el) {
  return (
    a +
    `<li class="keyboard__item" data-key="${el}">
  <span class="keyboard__char">${el}</span>
</li>
`
  );
}
