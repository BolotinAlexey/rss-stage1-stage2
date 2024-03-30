import { createElement } from "../services/supFunctions";

export default function createThead(table: HTMLTableElement) {
  const thead = createElement<HTMLTableSectionElement>("thead", [
    "table__thead",
  ]);

  const row = createElement<HTMLTableRowElement>("tr", ["table__tr"]);

  const content = ["Number", "Car", "Name", "Wins", "Best_time"].map((name) => {
    const th = createElement<HTMLTableCellElement>(
      "th",
      ["table__th", `table__td_${name.toLowerCase()}`],
      name,
    );
    return th;
  });

  row.append(...content);
  thead.append(row);
  table.append(thead);
}
