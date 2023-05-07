function solution(numbers) {
  numbers.sort((a, b) => a - b);
  const len = numbers.length;
  const max1 = numbers[len - 1] * numbers[len - 2];
  const max2 = numbers[0] * numbers[1];
  return Math.max(max1, max2);
}
