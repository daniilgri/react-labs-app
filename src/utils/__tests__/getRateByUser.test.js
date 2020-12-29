import getRateByUser from "../getRateByUser";

describe("utils function: getRateByUser", () => {
  it("should return rate", () => {
    const fakeRates = [
      { userUid: "uidsufoi", rate: 3 },
      { userUid: "jiowej", rate: 4 },
      { userUid: "weiroj", rate: 2 },
    ];
    expect(getRateByUser({ rates: fakeRates, userUid: "weiroj" })).toBe(2);
  });
});
