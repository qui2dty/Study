let solution = function (a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    count += a[i] * b[i];
  }
  return count;
};