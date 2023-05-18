import { powerOfTwoTestRunner } from "./test-runner/power-of-two-test-runner.js";

//Power of Two Algorithm - 1st Solutiom
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
};

//Big O - O(log n)

//Bitwise Power of Two solution
const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

//Big 0 - O(1)

//Test 1
console.time("fn1");
powerOfTwoTestRunner(isPowerOfTwo);
console.timeEnd("fn1");

//Test 2
console.time("fn2");
powerOfTwoTestRunner(isPowerOfTwoBitwise);
console.timeEnd("fn2");

//Bitwise solution is much faster than the first solution
