let solution = function (arr, com) {
  let newArr;
  let result = [];
  let i;
  let j;
  let k;

  for (let m = 0; m < com.length; m++) {
    newArr = arr;
    i = com[m][0] - 1;
    j = com[m][1];
    k = com[m][2] - 1;

    newArr = arr.slice(i, j);

    newArr.sort((a, b) => a - b);
    result.push(newArr[k]);
  }

  return result;
};