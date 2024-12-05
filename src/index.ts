export const add = function (numbers: string) {
  // If string is empty then return 0
  if (!numbers) return 0;

  let splitedString: number[] = [];
  let delimiter: any = /,|\n/;

  // To check is string contains custom delimiter
  if (numbers.startsWith("//")) {
    delimiter = numbers.charAt(2); // identify custom delimiter
    const newLineIndex = numbers.indexOf("\n"); // find index of new line so will continue to check string after new line
    numbers = numbers.substring(newLineIndex + 1); // consider string aftre new line to perform seperation operation
  }

  // extract numbers by spliting string
  splitedString = numbers.split(delimiter).map((n) => parseInt(n));

  // To check negative number or not, if yes then throw error
  if (Math.min(...splitedString) < 0) {
    let negativeNums = splitedString.filter((n) => n < 0);
    let errMsg = "negatives not allowed";
    errMsg += negativeNums.length > 1 ? " " + negativeNums.join(",") : "";
    throw new Error(errMsg);
  }

  // Perform addition operation from splited data and return answer
  return splitedString.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};
