export const add = function (numbers: string) {
  // If string is empty then return 0
  if (!numbers) return 0;

  let splitedString: Array<string> = [];

  // To check is string contains custom delimiter
  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.charAt(2); // identify custom delimiter
    const newLineIndex = numbers.indexOf("\n"); // find index of new line so will continue to check string after new line
    const updatedStr = numbers.substring(newLineIndex + 1); // consider string aftre new line to perform seperation operation
    splitedString = updatedStr.split(customDelimiter); // splitiing string by custom delimiter
  } else {
    // extract numbers by spliting string
    splitedString = numbers.split(/,|\n/);
  }

  // Perform addition operation from splited data and return answer
  return splitedString.reduce((prev, curr) => {
    return prev + parseInt(curr);
  }, 0);
};
