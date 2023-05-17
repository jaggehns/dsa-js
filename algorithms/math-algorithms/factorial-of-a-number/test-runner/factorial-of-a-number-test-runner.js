export const factorialTestRunner = (factorial) => {
  console.log(
    factorial(0),
    factorial(0) === 1 ? "✅ Test Passed" : "❌ Test Failed"
  ); //1
  console.log(
    factorial(1),
    factorial(1) === 1 ? "✅ Test Passed" : "❌ Test Failed"
  );
  console.log(
    factorial(5),
    factorial(5) === 120 ? "✅ Test Passed" : "❌ Test Failed"
  ); // 120
};
