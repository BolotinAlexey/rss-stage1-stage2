type DataWinners = Record<"id" | "time" | "wins", number>;
interface ICar {
  id: number;
  color: string;
  name: string;
  html?: HTMLElement | null;
  idFrame?: number | null;
}

export { DataWinners, ICar };
