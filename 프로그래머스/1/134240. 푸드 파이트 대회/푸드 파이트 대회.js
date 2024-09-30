let solution = function (s) {
  //   [1][(2, 2)][(3, 3, 3)][0][(3, 3, 3)][(2, 2)][1];
  let arrFirst = [];
  let arrSecond = [];
  let newArr;

  for (let i = 1; i < s.length; i++) {
    if (s[i] % 2 !== 0) {
      s[i] = s[i] - 1;
    }
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s[i] / 2; j++) {
      arrFirst.push(i);
      arrSecond.unshift(i);
    }
  }
  newArr = arrFirst.concat(0, arrSecond);
  let answer = newArr.join('');
  return answer;
};
          