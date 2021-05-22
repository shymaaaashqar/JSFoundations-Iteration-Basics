/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  // Your code here
  // const filterodd = numbers.filter(function (num) {
  //   return num % 2 == 1;
  // });
  // const sortNum = filterodd.sort(function (num2) {
  //   return num2;
  // });
  // return sortNum;
  //*******arrow function:
  const odds = numbers.filter((number) => number % 2 == 1);
  return odds;
}
console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  // Your code here
  // const filterEven = numbers.filter(function (num) {
  //   return num % 2 == 0;
  // });
  // var sortNum = filterEven.sort(function (numE) {
  //   return numE;
  // });
  // return sortNum;
  //******Arrow function:
  const even = numbers.filter((number) => number % 2 == 0);
  return even;
}
console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * countOccurences(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * countOccurences(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * countOccurences(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function countOccurences(x, numbers) {
  // Your code here
  // let count = 0;
  // var countArray = numbers.map(function (num) {
  //   if (x == num) {
  //     count++;
  //   }
  // });
  // return count;
  //*********Arrow function :
  let count = 0;
  let counter = numbers.map((number) => (number === x ? count++ : count));
  return count;
}
console.log(
  countOccurences(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13])
);

/**
 * makeThemDoctors(students):
 * - receives array `students`
 * - returns an array with the same elements of students with prefix `Dr. `
 *
 * e.g.
 * makeThemDoctors(["Ali", "Aseel", "Richard"]) -> ["Dr. Ali", "Dr. Aseel", "Dr. Richard"]
 */

function makeThemDoctors(students) {
  // Your code here
  // const text = "Dr. ";
  // let doctors = students.map(function (student) {
  //   return text.concat(student);
  // });
  // return doctors;
  //********** Arrow function :
  const names = students.map((student) => `Dr. ${student}`);
  return names;
}
console.log(makeThemDoctors(["Ali", "Aseel", "Richard"]));

module.exports = { getOdds, getEvens, countOccurences, makeThemDoctors };
