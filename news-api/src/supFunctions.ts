export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === undefined) {
        throw new Error(`${value} is not defined`);
    }
    if (value === null) {
        throw new Error(`${value} is null`);
    }
}

export function getElement<T extends HTMLElement>(parent: HTMLElement, selector: string): T {
    const el = parent.querySelector<T>(selector);
    assertIsDefined(el);
    return el;
}
