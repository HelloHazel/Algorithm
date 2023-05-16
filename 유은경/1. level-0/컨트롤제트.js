function solution(s) {
  let sum = 0;
  let temp = 0;

  const tokens = s.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "Z") {
      sum -= temp;
    } else {
      let num = parseInt(tokens[i]);
      sum += num;
      temp = num;
    }
  }

  return sum;
}
