export const copy = <T>(set: Set<T>): Set<T> => new Set(set);

export const add = <T>(element: T, set: Set<T>): Set<T> =>
  new Set([...set, element] as T[]);

export const remove = <T>(element: T, set: Set<T>): Set<T> =>
  new Set(([...set] as T[]).filter((i) => i !== element));

export const singleton = <T>(arr: T[]): arr is [T] => arr.length === 1;
