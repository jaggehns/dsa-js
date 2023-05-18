import { primeTestRunner } from "./test-runner/prime-number-test-runner.js";

//Prime Number Algorithm - 1st Solution
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

//Big O - O(n)

//Optimized Primality Test
const isOptimizedPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

//Big O - O(sqrt(n))

//Test 1
console.time("fn1");
primeTestRunner(isPrime);
console.timeEnd("fn1");

//Test 2
console.time("fn2");
primeTestRunner(isOptimizedPrime);
console.timeEnd("fn2");

//time taken for the optimized solution is much faster than the first solution
