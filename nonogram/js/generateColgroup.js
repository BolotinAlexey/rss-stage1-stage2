export default function generateColgroup(maxLeft, size) {
  return `
  <colgroup class="colgropup">
    <col class="table__clues_left" span="${maxLeft}"/>
    ${'<col span="5" />'.repeat(size)}
  </colgroup>
  `;
}
