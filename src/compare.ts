import { difference, intersection, union } from "ramda";

export const disjoint = <T>(x: T[], y: T[]): boolean =>
  intersection(x, y).length === 0;

export const overlaps = <T>(x: T[], y: T[]): boolean =>
  intersection(x, y).length > 0;

export const contains = <T>(arr: T[], inner: T[]): boolean =>
  difference(inner, arr).length === 0;

export const mapDifference = <T, U>(x: T[], y: T[], map: (i: T) => U): U[] =>
  difference(x, y).map(map);

export const venn = <T>(
  x: T[],
  y: T[],
): Record<"A∩B" | "A∪B" | "A∩¬B" | "¬A∩B", T[]> => ({
  "A∩B": intersection(x, y),
  "A∪B": union(x, y),
  "A∩¬B": difference(x, y),
  "¬A∩B": difference(y, x),
});
