import { negate, pipe } from "ramda";

export type Comparator<T> = (x: T, y: T) => number;

export const index = (i: string, arr: string[]): number =>
  arr.includes(i) ? arr.indexOf(i) : arr.length;

export const order =
  (arr: string[]) =>
  (i: string, j: string): number =>
    index(i, arr) - index(j, arr);

export const reverseOrder = <T>(order: Comparator<T>): Comparator<T> =>
  pipe(order, negate);

export const ascending: Comparator<number> = (x, y) => x - y;

export const descending: Comparator<number> = reverseOrder(ascending);

export const alphabetical: Comparator<string> = (x, y) => x.localeCompare(y);
