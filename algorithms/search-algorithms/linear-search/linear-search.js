import { linearSearchTestRunner } from "./test-runner/linear-search-test-runner.js";

//Linear Search Algorithm
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

//Test Case
linearSearchTestRunner(linearSearch);

//Big O - O(n)
