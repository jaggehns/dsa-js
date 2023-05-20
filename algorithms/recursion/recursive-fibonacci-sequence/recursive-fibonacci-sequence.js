import { recursiveFibonacciTestRunner } from "./test-runner/recursive-fibonacci-sequence-test-runner.js";

// Recursive Fibonacci Sequence Algorithm
const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

//Test Case
recursiveFibonacciTestRunner(recursiveFibonacci);
