import { add, copy, remove } from "./sets";

describe("copy", () => {
  it("copies a set without mutating the source", () => {
    const source = new Set<number>([]);
    const set = copy(source);
    expect(copy(set)).toEqual(source);
    expect(copy(set)).not.toBe(source);
  });

  it("adds an element to a set without mutating the source", () => {
    const source = new Set<number>([]);
    const set = add(1, source);
    expect(set.has(1)).toBe(true);
    expect(source.has(1)).toBe(false);
  });

  it("removes an element from a set without mutating the source", () => {
    const source = new Set([1]);
    const set = remove(1, source);
    expect(set.has(1)).toBe(false);
    expect(source.has(1)).toBe(true);
  });
});
