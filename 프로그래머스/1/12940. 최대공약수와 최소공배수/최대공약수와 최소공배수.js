let solution = function (n, m) {
  let lower = 0;
  let higher = 0;
  let min = 0;
  let max = 0;
  if (n <= m) {
    lower = n;
    higher = m;
  } else {
    lower = m;
    higher = n;
  }

  for (let i = 1; i <= lower; i++) {
    if (lower % i == 0 && higher % i == 0) {
      min = i;
    }
  }

  for (let i = 1; i <= lower; i++) {
    if ((higher * i) % lower === 0) {
      max = higher * i;
      break;
    }
  }
  return [min, max];
};