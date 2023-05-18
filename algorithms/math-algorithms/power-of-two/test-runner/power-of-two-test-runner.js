export const powerOfTwoTestRunner = (isPowerOfTwo) => {
  //Test Case 1
  console.log(
    isPowerOfTwo(1),
    isPowerOfTwo(1) === true ? "✅ Test Passed" : "❌ Test Failed"
  ); // true

  //Test Case 2
  console.log(
    isPowerOfTwo(2),
    isPowerOfTwo(2) === true ? "✅ Test Passed" : "❌ Test Failed"
  ); // true

  //Test Case 3
  console.log(
    isPowerOfTwo(6),
    isPowerOfTwo(5) === false ? "✅ Test Passed" : "❌ Test Failed"
  ); // false
};
