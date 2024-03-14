export type User = Required<Record<"name" | "surname", "string">>;

export interface Login {
  form: HTMLFormElement;
  nameInput: HTMLInputElement;
  surnameInput: HTMLInputElement;
}

export interface LevelData {
  id: string;
  name: string;
  imageSrc: string;
  cutSrc: string;
  author: string;
  year: string;
}

export interface Words {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}

export interface Rounds {
  levelData: LevelData;
  words: Words[];
}

export interface Level {
  rounds: Rounds[];
  roundsCount: number;
}
