import createKeywords from "../createKeywords";

describe("utils function: createKeywords", () => {
  it("should return keywords array from a string", () => {
    expect(createKeywords("Be cool!")).toEqual([
      "B",
      "Be",
      "Be ",
      "Be c",
      "Be co",
      "Be coo",
      "Be cool",
      "Be cool!",
    ]);
  });
});
