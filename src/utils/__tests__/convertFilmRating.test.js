import convertFilmRating from "../convertFilmRating";

describe("utils function: convertFilmRating", () => {
  it("should return rounded average rating", () => {
    const fakeRates = [
      { userUid: "uidsufoi", rate: 3 },
      { userUid: "jiowej", rate: 4 },
      { userUid: "weiroj", rate: 2 },
    ];
    expect(convertFilmRating(fakeRates)).toBe(Math.round((3 + 4 + 2) / 3));
  });
});
