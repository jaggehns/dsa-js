export const primeTestRunner = (isPrime) => {
  //Prime Number Test Runner
  //Test Case 1
  console.log(
    isPrime(1),
    isPrime(1) === false ? "✅ Test Passed" : "❌ Test Failed"
  ); // false

  //Test Case 2
  console.log(
    isPrime(5),
    isPrime(5) === true ? "✅ Test Passed" : "❌ Test Failed"
  ); // true

  //Test Case 3
  console.log(
    isPrime(4),
    isPrime(4) === false ? "✅ Test Passed" : "❌ Test Failed"
  ); // false
};
