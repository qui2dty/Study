function solution(a, b) {
  const numberB = Number(b);
  let count = 0;

  for (let i = 0; i < a.length - b.length + 1; i++) {
    const slicedA = a.slice(i, i + b.length);
    const numberA = Number(slicedA);

    if (numberA <= numberB) {
      count += 1;
    }
  }

  return count;
}