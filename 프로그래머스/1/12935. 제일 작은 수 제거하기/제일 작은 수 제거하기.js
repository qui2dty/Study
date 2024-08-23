let solution = function (arr) {
  if (arr.length < 2) {
    return [-1];
  }
  const MinNum = Math.min(...arr);
  const selectNumber = arr.filter((num) => num > MinNum);

  return selectNumber;
};