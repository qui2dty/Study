let solution = function (a, b, sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == a[0]) {
      a.shift();
      console.log(`a: `, a);
    } else if (sentence[i] == b[0]) {
      b.shift();
      console.log(`b: `, b);
    } else {
      return "No";
    }
  }
  return "Yes";

};