const solution = function (string) {
  let arr = string.split("");
  let SlicedArr;
  let answer = 0;
  if (arr.length % 2 !== 0) {
    SlicedArr = arr.slice(
      Math.floor(arr.length / 2),
      Math.floor(arr.length / 2) + 1
    );


  } else {
    SlicedArr = arr.slice(
      Math.floor(arr.length / 2) - 1,
      Math.floor(arr.length / 2) + 1
    );
  }
  answer = SlicedArr.join("");
  return answer;
};