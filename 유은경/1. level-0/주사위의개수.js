function solution(box, n) {
  let minSize = Math.min(...box);
  if (minSize < n) {
    return 0;
  } else {
    let count =
      Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    return count;
  }
}
