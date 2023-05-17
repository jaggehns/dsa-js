import { factorialTestRunner } from "./test-runner/factorial-of-a-number-test-runner.js";

//Factorial of a Number Algorithm
const factorial = (n) => {
  let result = 1;
  //i = 2 because multiplying by 1 has no effect
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

factorialTestRunner(factorial);

//Big O - O(n)
