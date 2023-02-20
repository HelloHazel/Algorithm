// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// function solution(dots) {
//     // 직사각형의 밑변과 높이를 계산
//     const base = Math.abs(dots[0][0] - dots[1][0]);
//     const height = Math.abs(dots[0][1] - dots[2][1]);
  
//     // 넓이를 계산
//     return base * height;
//   } 
 //최대값-최소값을 구현하지 않아 틀림

function solution(dots) {
    const xs = dots.map(dot => dot[0]);
    const ys = dots.map(dot => dot[1]);
  
    const width = Math.abs(Math.max(...xs) - Math.min(...xs));
    const height = Math.abs(Math.max(...ys) - Math.min(...ys));
  
    return width * height;
  }

