import { calculateTimeLeft } from "../TodoPage.utils";

describe("time difference calculating function", () => {
  test.each([
    {
      futureDate: (Date.now() + 86400000).toString(),
      expected: { days: 0, hours: 23 },
    },
    {
      futureDate: (Date.now() + 36001000).toString(),
      expected: { days: 0, hours: 10 },
    },
    {
      futureDate: (Date.now() - 36001000).toString(),
      expected: { days: -0, hours: -10 },
    },
  ])("checking if correct color is returned", ({ futureDate, expected }) => {
    expect(calculateTimeLeft(futureDate)).toStrictEqual(expected);
  });
});
