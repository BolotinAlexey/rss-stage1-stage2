export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined) {
    throw new Error(`${value} is not defined`);
  }
  if (value === null) {
    throw new Error(`${value} is null`);
  }
}

export function getElement<T extends HTMLElement>(
  parent: HTMLElement,
  selector: string,
): T {
  const el: T | null = parent.querySelector<T>(selector);
  assertIsDefined(el);
  return el;
}
export function getElementDocument<T extends HTMLElement>(selector: string): T {
  const el: T | null = document.querySelector<T>(selector);
  assertIsDefined(el);
  return el;
}

export function createElement<T extends HTMLElement>(
  tag: string,
  cls?: string[],
  content?: string,
): T {
  const el: HTMLElement = document.createElement(tag);
  el.innerHTML = content || "";
  if (cls) el.classList.add(...cls);
  return <T>el;
}

export function isHTML(param: unknown): param is HTMLElement {
  return param instanceof HTMLElement;
}
