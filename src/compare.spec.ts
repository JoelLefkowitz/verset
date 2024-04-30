import { contains, overlaps, venn } from "./compare";

describe("overlaps", () => {
  it("checks if two arrays overlap", () => {
    expect(overlaps([1, 2], [2, 3])).toBe(true);
    expect(overlaps([1, 2], [3, 4])).toBe(false);
  });
});

describe("contains", () => {
  it("checks if an array contains another", () => {
    expect(contains([1, 2], [2])).toBe(true);
    expect(contains([1, 2], [2, 3])).toBe(false);
  });
});

describe("venn", () => {
  it("finds the intersection and differences between two arrays", () => {
    expect(venn([1, 2], [2, 3])).toEqual({
      "A∩B": [2],
      "A∪B": [1, 2, 3],
      "A∩¬B": [1],
      "¬A∩B": [3],
    });

    expect(venn([1, 1, 2, 2], [2, 2, 3, 3])).toEqual({
      "A∩B": [2],
      "A∪B": [1, 2, 3],
      "A∩¬B": [1],
      "¬A∩B": [3],
    });
  });
});
