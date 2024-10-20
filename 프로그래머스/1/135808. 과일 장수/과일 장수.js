let solution = function (k, m, score) {
  let result = 0;
  let tempArr;
  let tempNum = 0;
  let count = Math.floor(score.length / m);

  score.sort((a, b) => b - a);

  //console.log(count);
  for (let i = 0; i < count; i++) {
    //i = 0 1 2 3 , m = 3                     3 -1 =2          0+1 1+1  2+1 3+1   1 2 3 4
    //tempArr = score.splice(0, m);
    // tempNum = Math.min(...tempArr) * tempArr.length;
    //console.log(score[m - 1 + i * m]); // 2 5 8 11
    tempNum = score[m - 1 + i * m] * m;

    //console.log(tempNum);
    result = result + tempNum;
    //console.log(`score: ${score}, tempArr: ${tempArr}, result: ${result}`);
  }

  return result;
};