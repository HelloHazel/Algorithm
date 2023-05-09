function solution(n) {
  let left = 1;
  let right = n;
  let mid;
  let fac;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    fac = 1;

    for (let i = 1; i <= mid; i++) {
      fac *= i;
      if (fac > n) break; // i!이 n보다 크면 더 이상 계산하지 않음
    }

    if (fac <= n) left = mid + 1;
    else right = mid - 1;
  }

  return left - 1;
}
