export const recursiveFibonacciTestRunner = (recursiveFibonacci) => {
  console.log(
    recursiveFibonacci(0),
    recursiveFibonacci(0) === 0 ? "✅ Test Passed" : "❌ Test Failed"
  ); //1
  console.log(
    recursiveFibonacci(1),
    recursiveFibonacci(1) === 1 ? "✅ Test Passed" : "❌ Test Failed"
  );
  console.log(
    recursiveFibonacci(6),
    recursiveFibonacci(6) === 8 ? "✅ Test Passed" : "❌ Test Failed"
  ); // 120
};
