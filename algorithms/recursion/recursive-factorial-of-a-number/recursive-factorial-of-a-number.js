import { factorialTestRunner } from "../../math-algorithms/factorial-of-a-number/test-runner/factorial-of-a-number-test-runner.js";

//Recursive Factorial of a Number Algorithm
const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

//Test Case
factorialTestRunner(recursiveFactorial);

//Big O - O(n)
