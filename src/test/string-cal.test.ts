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

  test("Should return sum of multiple numbers which are seperated by commas and new lines", () => {
    const intStr = "1\n2,3";
    expect(add(intStr)).toBe(6);
  });

  test("Should return sum of multiple numbers which are seperated by different delimiters and new lines", () => {
    const intStr = "//;\n1;2";
    expect(add(intStr)).toBe(3);
  });

  test("Should throw error if negative number found", () => {
    const intStr = "//;\n1;-2";
    try {
      add(intStr);
      expect(1).toBe(0);
    } catch (error: any) {
      expect(error?.message).toBe("negatives not allowed");
    }
  });

  test("Should throw error message with negative numbers if negative number found", () => {
    const intStr = "//;\n1;-2;-6;9";
    try {
      add(intStr);
      expect(1).toBe(0);
    } catch (error: any) {
      expect(error?.message).toBe("negatives not allowed -2,-6");
    }
  });

  test("Should return sum of multiple numbers and ignore number those are bigger than 1000", () => {
    const intStr = "//+\n1+2000";
    expect(add(intStr)).toBe(1);
  });

  test("Should return sum of multiple numbers with custom delimiter with any number of length", () => {
    const intStr = "//[***]\n1***2***3";
    expect(add(intStr)).toBe(6);
  });

  test("Should return sum of multiple numbers with custom delimiter with different type of delimiter", () => {
    const intStr = "//[*][%]\n1*2%3";
    expect(add(intStr)).toBe(6);
  });

  test("Should return sum of multiple numbers with custom delimiter with any number of length with different type of delimiter", () => {
    const intStr = "//[**][??]\n1**2??3";
    expect(add(intStr)).toBe(6);
  });
});
