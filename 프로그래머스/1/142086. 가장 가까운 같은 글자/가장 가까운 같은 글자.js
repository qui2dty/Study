function solution(string) {
  let result = [];
  let chkStr = [];
  for (let i = 0; i < string.length; i++) {
    if (!chkStr.includes(string[i])) {
      result.push(-1);

      chkStr.push(string[i]);
    } else if (chkStr.includes(string[i])) {
      result.push(i - chkStr.lastIndexOf(string[i]));
      chkStr.push(string[i]);
    }
  }
  return result;
}