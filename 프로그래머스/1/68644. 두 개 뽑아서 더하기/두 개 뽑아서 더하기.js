let solution = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      let isDuplicate = false;

      for (let k = 0; k < newArr.length; k++) {
        if (newArr[k] === sum) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        newArr.push(sum);
      }
    }
  }
  newArr.sort((a, b) => a - b);

  return newArr;
};