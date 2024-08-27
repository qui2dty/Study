let solution = function (s) {
  let arr = s.split("");
  let answer;
  arr.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  answer = arr.join("");
  return answer;
};