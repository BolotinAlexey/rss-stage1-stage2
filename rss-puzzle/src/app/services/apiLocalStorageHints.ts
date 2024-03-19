import { KEY_HINTS } from "../constants/index";
import { Hints } from "../interfaces/index";

export default class ApiLSHints {
  keyHints: string;

  constructor(keyHints: string = KEY_HINTS) {
    this.keyHints = keyHints;
  }

  isHint(): boolean {
    const data: string | null = localStorage.getItem(this.keyHints);
    return !!data;
  }

  delHints(): void {
    localStorage.removeItem(this.keyHints);
  }

  setHints(hints: Hints): void {
    localStorage.setItem(this.keyHints, JSON.stringify(hints));
  }

  getHints(): Hints {
    const hints: string | null = localStorage.getItem(this.keyHints);
    if (!hints) throw new Error("Don't find user");
    const hintsObj: Hints = JSON.parse(hints);

    return hintsObj;
  }
}
