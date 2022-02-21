// This is arrow function
const arr1 = (a) => (b) => a * b;
console.log(arr1(2)(4));
// This is regular funtion
function nSum(a, b) {
  return a + b;
}

const aSum = (a, b) => {
  return a + b;
};

const nSumResult = nSum(12, 12);
const aSumResult = aSum(12, 12);
console.log({nSumResult, aSumResult});
// ============================================
function arr(a) {
  return function (b) {
    return a * b;
  };
}
console.log(arr(2)(4));
