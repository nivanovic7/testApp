// Logic Test 1: Array Transformation
// Goal: Assess problem-solving skills and array manipulation.

// Task: Given an array of integers, write a function that:

// 1. Removes all duplicates.
// removeDuplicates(input);
const input = [4, 3, 1, 2, 2, 3, 4];

function transform(input) {
  const unique = [...new Set(input)].sort((a, b) => a - b);
  return {
    odd: unique.filter((num) => num % 2 !== 0),
    even: unique.filter((num) => num % 2 === 0),
  };
}

function findPath(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][i] !== 1) return false;
  }
  return true;
}

console.log(findPath(grid));

// console.log(transform(input));

// Sorts the array in ascending order.

// 2.1. console.log(input.sort((a, b) => (a > b ? 1 : -1)));
// 2.2. sortArray(input);

// Returns the array split into two subarrays:
// One with even numbers.
// One with odd numbers.

// 3. splitToSubArrays(input);

// Example Input:
// const input = [4, 3, 1, 2, 2, 3, 4];

// Expected Output:
// {
//   even: [2, 4],
//   odd: [1, 3]
// }

// ----------------------------------------------------------------

// Logic Test 2: Write a function that calculates the sum of all numerical values in a deeply nested object.

// Example Input:
// const data = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } },
//   f: 4
// };

// Expected Output:
// 10

//  1. findSum(obj);

// ----------------------------------------------------------------

// Logic Test 3: Path Finder
// Goal: Test graph traversal skills.

// Task: Given a 2D grid of 1s (paths) and 0s (walls), write a function to determine if there’s a path from the top-left corner to the bottom-right corner.

// Example Input:
// const grid = [
//   [1, 1, 0, 1],
//   [0, 1, 0, 0],
//   [1, 1, 1, 1],
//   [0, 0, 1, 1]
// ];

// Expected Output:
// true  // There is a path.

// 1. pathFinder(grid, 0, 0);

// ----------------------------------------------------------------

// Logic Test 4: Find Missing Number
// Goal: Test mathematical reasoning.

// Task: Given an array containing numbers from 1 to n with one missing number, write a function to find the missing number.

// Example Input:
// const input = [1, 2, 4, 5, 6];  // Missing 3

// Expected Output:
// 3

// 1. findMissing([1, 2, 3, 4, 5, 7, 8, 9, 10]);

// ----------------------------------------------------------------

// Removes all duplicates.
function removeDuplicates(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let occurences = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) occurences++;
    }
    if (occurences < 2) newArray.push(array[i]);
  }
  console.log(newArray);
}
// removeDuplicates(input)
// ----------------------------------------------------------------

// Sorts the array in ascending order.
function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let temp = 0;
      if (array[i] < array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
}
// console.log(input.sort((a, b) => (a > b ? 1 : -1)));
// sortArray(input);

// ----------------------------------------------------------------

// Returns the array split into two subarrays:
function splitToSubArrays(array) {
  const obj = { odd: [], even: [] };
  array.forEach((num) =>
    num % 2 === 0 ? obj.even.push(num) : obj.odd.push(num)
  );
  console.log(obj);
}
// splitToSubArrays(input);

// ----------------------------------------------------------------

//Find missing
function findMissing(arr) {
  const missing = [];
  for (let i = 1; i <= arr.length + 1; i++) {
    if (!arr.includes(i)) missing.push(i);
  }

  console.log(missing);
}
// findMissing([1, 2, 3, 4, 5, 7, 8, 9, 10]);

// ----------------------------------------------------------------

const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: 4,
};

function findSum(obj) {
  let sum = 0;
  function loopObject(obj) {
    Object.values(obj).map((val) => {
      if (typeof val === "number") {
        sum += val;
      } else {
        sum + loopObject(val);
      }
    });
    return sum;
  }
  console.log(loopObject(obj));
}
// findSum(obj);

// ----------------------------------------------------------------

const grid = [
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];

function pathFinder(arr, startX, startY) {
  checkNextStep(arr, startX, startY);
}

function checkNextStep(grid, i, j) {
  console.log(i, j);
  const pathEnd = grid.length - 1;
  if (i == pathEnd && j == pathEnd) {
    console.log("PATH exists!!!");
  }

  if (grid[i][j] === 1) {
    if (grid.length > i + 1) checkNextStep(grid, i + 1, j);
    if (grid.length > j + 1) checkNextStep(grid, i, j + 1);
  }
}

// pathFinder(grid, 0, 0);
