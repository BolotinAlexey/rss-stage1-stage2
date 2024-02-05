export default function generateColgroup(maxLeft, size, name) {
  return `
  <colgroup class="colgroup"  data-name=${name}>
    <col class="table__clues_left" span="${maxLeft}"/>
    ${'<col span="5" />'.repeat(size)}
  </colgroup>
  `;
}
