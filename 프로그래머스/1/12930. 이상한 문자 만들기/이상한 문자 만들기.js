let solution = function (string) {
  let arr = [];
  let arr2 = [];

  arr = string.split(" ");

  for (let i = 0; i < arr.length; i += 1) {
    arr2 = arr[i].split("");
    for (let j = 0; j < arr2.length; j += 1) {
      if (j % 2 == 0) {
        arr2[j] = arr2[j].toUpperCase();
      } else {
        arr2[j] = arr2[j].toLowerCase();
      }
    }
    arr[i] = arr2.join("");
  }

  return arr.join(" ");
};