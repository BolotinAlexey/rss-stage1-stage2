type DataWinner = Record<"id" | "wins" | "time", number>;

type DataWinnerRequire = Omit<DataWinner, "id">;

export { DataWinner, DataWinnerRequire };
