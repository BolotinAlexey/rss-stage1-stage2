type DataWinners = Record<"id" | "time" | "wins", number>;
interface IDataGarage {
  id: number;
  color: string;
  name: string;
}

export { DataWinners, IDataGarage };
