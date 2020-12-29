import generateKeywords from "../generateKeywords";

describe("utils function: generateKeywords", () => {
  it("should combine results from createKeywords function and return array", () => {
    expect(generateKeywords({ title: "Be cool!" })).toEqual([
      "",
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
