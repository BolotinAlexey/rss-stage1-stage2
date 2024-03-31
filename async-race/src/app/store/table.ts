import Sort from "../interfaces/sort";

export default class StoreTable {
  static order: "ASC" | "DESC" = "ASC";

  static sort: Sort = "id";

  static get getOrder(): "ASC" | "DESC" {
    return this.order;
  }

  static set setSort(sort: Sort) {
    this.sort = sort;
  }

  public static get getSort(): Sort | null {
    return this.sort;
  }

  // static set setTable(table: Table) {
  //   this.table = table;
  // }

  // public static get getTable(): Table | null {
  //   return this.table;
  // }
}
