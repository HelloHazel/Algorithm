function solution(numbers, direction) {
  if (direction === "left") {
    return numbers.slice(1).concat(numbers[0]);
  } else {
    return [numbers[numbers.length - 1]].concat(numbers.slice(0, -1));
  }
}
