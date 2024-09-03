let solution = function (a) {
  let check = 0;

  for (let i = 0; i < a.length; i++) {

    for (let j = i + 1; j < a.length; j++) {

      for (let k = j + 1; k < a.length; k++) {

        if (a[i] + a[j] + a[k] === 0) {
          check += 1;
        }
      }
    }
  }

  return check;
};