let solution = function (price, money, count) {
  let priceCheck = 0;

  for (let i = 1; i <= count; i++) {
    priceCheck += price * i;
  }

  if (money >= priceCheck) {
    return 0;
  } else {
    return priceCheck - money;
  }
};