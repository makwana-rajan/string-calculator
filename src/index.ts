export const add = function (numbers: string) {
  const splitedString = numbers.split(/,/);
  return splitedString.reduce((prev, curr) => {
    return prev + parseInt(curr);
  }, 0);
};
