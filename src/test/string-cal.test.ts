import { add } from "../index";

describe("String calculator unit test cases", () => {
  test("Should return sum of two numbers which is seperated by commas", () => {
    const intStr = "2,5";
    expect(add(intStr)).toBe(7);
  });
});
