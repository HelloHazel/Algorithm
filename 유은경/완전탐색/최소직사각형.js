function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    let w = sizes[i][0];
    let h = sizes[i][1];

    if (w < h) {
      let temp = w;
      w = h;
      h = temp;
    }

    maxW = Math.max(maxW, w);
    maxH = Math.max(maxH, h);
  }

  return maxW * maxH;
}
