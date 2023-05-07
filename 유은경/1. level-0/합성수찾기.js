function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    let divisorCount = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisorCount++;
        if (j * j !== i) divisorCount++;
      }
    }
    if (divisorCount >= 2) count++;
  }
  return count;
}
