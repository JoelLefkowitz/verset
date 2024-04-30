import { identity, inc, toUpper } from "ramda";
import {
  mapKeys,
  mapPairs,
  mapValues,
  sortKeys,
  sortNestedKeys,
} from "./pairs";

describe("mapKeys", () => {
  it("applies a callback over an object's keys", () => {
    expect(mapKeys(identity, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    expect(mapKeys(toUpper, { a: 1, b: 2 })).toEqual({ A: 1, B: 2 });
  });
});

describe("mapValues", () => {
  it("applies a callback over an object's values", () => {
    expect(mapValues(identity, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    expect(mapValues(inc, { a: 1, b: 2 })).toEqual({ a: 2, b: 3 });
  });
});

describe("mapPairs", () => {
  it("applies a callback over an object's key-value pairs", () => {
    expect(mapPairs((k, v) => [k, v], { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    expect(mapPairs((k, v) => [toUpper(k), inc(v)], { a: 1, b: 2 })).toEqual({
      A: 2,
      B: 3,
    });
  });
});

describe("sortKeys", () => {
  it("applies a comparator over an object's keys", () => {
    expect(
      sortKeys((x, y) => x.charCodeAt(0) - y.charCodeAt(0), { a: 1, b: 2 }),
    ).toEqual({ a: 1, b: 2 });

    expect(
      sortKeys((x, y) => y.charCodeAt(0) - x.charCodeAt(0), { a: 1, b: 2 }),
    ).toEqual({ a: 1, b: 2 });
  });
});

describe("sortNestedKeys", () => {
  it("sorts a nested object alphabetically", () => {
    expect(
      JSON.stringify(
        sortNestedKeys({
          b: { g: 7, f: 6, h: { j: 10, i: 9 } },
          a: 1,
          c: { e: [5], d: 4 },
        }),
      ),
    ).toBe(
      JSON.stringify({
        a: 1,
        b: { f: 6, g: 7, h: { i: 9, j: 10 } },
        c: { d: 4, e: [5] },
      }),
    );
  });
});
