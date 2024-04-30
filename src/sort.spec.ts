import { alphabetical, ascending, descending } from "./sort";

describe("ascending", () => {
  it("sorts an array in ascending order", () => {
    expect([3, 1, 2].sort(ascending)).toEqual([1, 2, 3]);
  });
});

describe("descending", () => {
  it("sorts an array in descending order", () => {
    expect([3, 1, 2].sort(descending)).toEqual([3, 2, 1]);
  });
});

describe("alphabetical", () => {
  it("sorts an array in alphabetical order", () => {
    expect(["c", "a", "b"].sort(alphabetical)).toEqual(["a", "b", "c"]);
  });
});
