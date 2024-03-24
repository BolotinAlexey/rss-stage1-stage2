type DataWinners = Record<"id" | "time" | "wins", number>;
interface ICar {
  id: number;
  color: string;
  name: string;
}

export { DataWinners, ICar };
