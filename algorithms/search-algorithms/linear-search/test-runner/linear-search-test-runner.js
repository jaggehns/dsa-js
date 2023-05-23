export const linearSearchTestRunner = (linearSearch) => {
  const arr = [-5, 2, 10, 4, 6];
  console.log(
    linearSearch(arr, 10),
    linearSearch(arr, 10) === 2 ? "✅ Test Passed" : "❌ Test Failed"
  ); //2
  console.log(
    linearSearch(arr, 6),
    linearSearch(arr, 6) === 4 ? "✅ Test Passed" : "❌ Test Failed"
  ); //4
  console.log(
    linearSearch(arr, 20),
    linearSearch(arr, 20) === -1 ? "✅ Test Passed" : "❌ Test Failed"
  ); //-1
};
