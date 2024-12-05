export const add = function (numbers: string) {
  // If string is empty then return 0
  if (!numbers) return 0;

  let splitedString: number[] = [];
  let delimiter: any = /,|\n/;

  // To check is string contains custom delimiter
  if (numbers.startsWith("//")) {
    const newLineIndex = numbers.indexOf("\n"); // find index of new line so will continue to check string after new line
    if (numbers.includes("[") && numbers.includes("]")) {
      // Dynamic find multiple delimiters
      delimiter = numbers
        .split("[")
        .filter((i) => i.includes("]"))
        .map((i) => {
          return ["*", "+", ".", "?"].includes(i.charAt(0))
            ? "\\ " + i.charAt(0)
            : i.charAt(0);
        })
        .join("|");

      delimiter = new RegExp(delimiter, "g"); // string convert to regex pattern
    } else {
      delimiter = numbers.substring(numbers.lastIndexOf("/") + 1, newLineIndex); // identify custom delimiter with n length
    }
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
    return curr <= 1000 ? prev + curr : prev;
  }, 0);
};
