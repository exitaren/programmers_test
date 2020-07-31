// 문제 설명
// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
  let answer = '';
  let a = '수';
  let b = '박';
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (answer += a) : (answer += b);
  }
  return answer;
}

// repeat나 subString을 활용하는 경우가 많았다. 해당 메서드를 활용할 수 있는 방안도 구현할 수 있도록 하자.
// 아 커밋명 틀림
