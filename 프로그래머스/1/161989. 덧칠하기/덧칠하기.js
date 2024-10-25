
function solution(n, m, section) {
  let result = 0;
  let temp = 0;

  section.forEach((n) => {

    if (n > temp) {
      temp = n + m - 1;
      result++;
    }
  });
 return result;
}