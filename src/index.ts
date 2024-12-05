export const add = function (numbers: string) {
  // If string is empty then return 0
  if (!numbers) return 0;

  // extract numbers by spliting string
  const splitedString = numbers.split(/,/);

  // Perform addition operation from splited data and return answer
  return splitedString.reduce((prev, curr) => {
    return prev + parseInt(curr);
  }, 0);
};
