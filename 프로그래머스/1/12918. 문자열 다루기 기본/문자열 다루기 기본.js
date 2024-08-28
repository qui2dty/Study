let solution = function (strings) {
  let arr = strings.split("");
  let checker = false;

  if (arr.length == 4 || arr.length == 6) {
    for (let i = 0; i < arr.length; i++) {
      checker = isNaN(arr[i]);

      if (checker == true) {
        return false;
      }
    }
    return true;
  } else return false;
};