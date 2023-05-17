import { fibonacciTestRunner } from "./test-runner/fibonacci-sequence-test-runner.js";

//Fibonacci Sequence Algorithm
export const fibonacci = (n) => {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

fibonacciTestRunner(fibonacci);

//Big O - O(n)
