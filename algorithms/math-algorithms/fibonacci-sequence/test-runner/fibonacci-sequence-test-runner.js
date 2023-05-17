import { arraysEqual } from "../../../../utils/arrayEquals.js";

//Fibonacci Sequence Test Runner
export const fibonacciTestRunner = (fibonacci) => {
  //Test Case 1
  console.log(
    fibonacci(2),
    arraysEqual(fibonacci(2), [0, 1]) ? "✅ Test Passed" : "❌ Test Failed"
  ); // [0, 1]

  //Test Case 2
  console.log(
    fibonacci(3),
    arraysEqual(fibonacci(3), [0, 1, 1]) ? "✅ Test Passed" : "❌ Test Failed"
  ); // [0, 1, 1]

  //Test Case 3
  console.log(
    fibonacci(7),
    arraysEqual(fibonacci(7), [0, 1, 1, 2, 3, 5, 8])
      ? "✅ Test Passed"
      : "❌ Test Failed"
  ); // [0, 1, 1, 2, 3, 5, 8]
};
