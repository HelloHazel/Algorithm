function solution(my_string) {
  const numbers = my_string
    .split("")
    .filter((char) => /\d/.test(char))
    .map(Number);
  return numbers.sort((a, b) => a - b);
}
