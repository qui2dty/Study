let solution = function (n) {
  let arr = [];
  let answer;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      arr.push(`수`);
    } else {
      arr.push(`박`);
    }
  }

  answer = arr.join("");

  return answer;
};