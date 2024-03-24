import { getElementDocument } from "../services/supFunctions";

export default function routeLinkAndPage(entity: string, name: string) {
  const currentActive: HTMLElement = getElementDocument(`.active-${entity}`);
  const nextActive: HTMLElement = getElementDocument(`.${entity}__${name}`);

  if (currentActive) currentActive.classList.remove(`active-${entity}`);

  nextActive.classList.add(`active-${entity}`);
}
