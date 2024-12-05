import { add } from "../index";

describe("String calculator unit test cases", () => {
  test("Should return sum of two numbers which is seperated by commas", () => {
    const intStr = "5,2";
    expect(add(intStr)).toBe(7);
  });

  test("Should return 0 if string is empty", () => {
    const intStr = "";
    expect(add(intStr)).toBe(0);
  });
});
