let solution = function (a) {
  let arr = [];
  let arr2 = [];

  arr = a.toString(3).split("");

  for (let i = 0; i < arr.length; i++) {
    arr2.unshift(arr[i]);
  }

  return parseInt(arr2.join(""), 3);
};