const solution = function (a, b, n) {
  let answer = 0;
  let temp = 0;
  let temp2 = 0;
  let count = 0;
  let count2 = 0;

  //a 3, b 2, n 10

  temp = Math.floor(n % a); //1
  count = Math.floor(n / a) * b; //3 * 2? 6
  answer += count; // 6
  temp2 = temp;
  count2 = count;

  console.log(`count: ${count}, temp: ${temp}, answer: ${answer}`);

  while ((count + temp) / a >= 1) {
    count = Math.floor((count + temp2) / a) * b;
    answer += count;
    temp = Math.floor((count2 + temp) % a);
    count2 = count;
    temp2 = temp;
    console.log(`count: ${count}, temp: ${temp}, answer: ${answer}`);
  }

  return answer;
};
