export type StatusEngine = "started" | "stopped";
export interface Engine {
  id: number;
  status: StatusEngine;
}

export interface Drive {
  id: number;
  status: "drive";
}

export type ResponseEngine = Record<"velocity" | "distance", number>;
