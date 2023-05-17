function solution(strlist) {
  const lengths = [];
  for (let i = 0; i < strlist.length; i++) {
    lengths.push(strlist[i].length);
  }
  return lengths;
}
