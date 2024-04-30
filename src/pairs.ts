import { fromPairs, toPairs } from "ramda";
import { guard, isRecord } from "reviewed";

export const mapKeys = <T>(
  map: (k: string) => string,
  obj: Record<string, T>,
): Record<string, T> => fromPairs(toPairs(obj).map(([k, v]) => [map(k), v]));

export const mapValues = <K extends string, V, T>(
  map: (v: V) => T,
  obj: Record<K, V>,
): Record<K, T> => fromPairs(toPairs(obj).map(([k, v]) => [k, map(v)]));

export const mapPairs = <T, U>(
  map: (k: string, v: T) => [string, U],
  obj: Record<string, T>,
): Record<string, U> => fromPairs(toPairs(obj).map(([k, v]) => map(k, v)));

export const sortKeys = <T>(
  comparator: (i: string, j: string) => number,
  obj: Record<string, T>,
): Record<string, T> =>
  fromPairs(toPairs(obj).sort(([i], [j]) => comparator(i, j)));

export const sortNestedKeys = <T>(obj: Record<string, T>): Record<string, T> =>
  fromPairs(
    toPairs(obj)
      .sort()
      .map(([k, v]) => [k, guard(isRecord)(v) ? sortNestedKeys(v) : v]),
  ) as Record<string, T>;
