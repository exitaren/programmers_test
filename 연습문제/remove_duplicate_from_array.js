//중복 배열 제거

function unique(arr) {
  /* 제출 답안 */
  let set = new Set(arr);
  let array = [];
  for (let val of set) {
    array.push(val);
  }
  return array;
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

console.log(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
