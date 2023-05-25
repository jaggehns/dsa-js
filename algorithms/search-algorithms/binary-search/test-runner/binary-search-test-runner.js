export const binarySearchTestRunner = (linearSearch) => {
  const arr = [-5, 2, 4, 6, 10];
  console.log(
    linearSearch(arr, 10),
    linearSearch(arr, 10) === 4 ? "✅ Test Passed" : "❌ Test Failed"
  ); //4
  console.log(
    linearSearch(arr, 6),
    linearSearch(arr, 6) === 3 ? "✅ Test Passed" : "❌ Test Failed"
  ); //3
  console.log(
    linearSearch(arr, 20),
    linearSearch(arr, 20) === -1 ? "✅ Test Passed" : "❌ Test Failed"
  ); //-1
};
