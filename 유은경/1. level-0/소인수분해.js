function solution(n) {
  let factors = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  return Array.from(new Set(factors));
}
