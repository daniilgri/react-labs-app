import slugify from "../slugify";

describe("utils function: slugify", () => {
  it("should return string written as slug", () => {
    expect(slugify("the breaking bad")).toBe("the-breaking-bad");
  });
});
