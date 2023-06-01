// 문제 설명
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

function solution(s) {
  const charCount = {};

  // 문자열의 각 문자의 등장 횟수를 카운트
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // 등장 횟수가 1인 문자들을 사전 순으로 정렬하여 반환
  const uniqueChars = [];
  for (const char in charCount) {
    if (charCount[char] === 1) {
      uniqueChars.push(char);
    }
  }

  return uniqueChars.sort().join("");
}
