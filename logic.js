const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//   Expected Output:
//   [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
//   ]

function rotate(matrix) {
  const newMatrix = [];
  for (var i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
  }

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      newMatrix[j] = [matrix[i][j], ...newMatrix[j]];
    }
  }
  return newMatrix;
}
console.log("Original Matrix");
displayArray(matrix.flat());
console.log("Rotated Matrix");
displayArray(rotate(matrix).flat());

function isAnagram(string1, string2) {
  const x = Array.from(string1).sort();
  const y = Array.from(string2).sort();
  if (string1.length !== string2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    if (x[i] !== y[i]) return false;
  }
  return true;
}

console.log(isAnagram("radnaskela", "aleksandar"));

const grid = [
  [2, 1, 0],
  [1, 1, 0],
  [0, 1, 1],
];

// function transform(grid) {
//   const newGrid = [];
//   for (var i = 0; i < grid.length; i++) {
//     newGrid[i] = [];
//   }

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       let x = newGrid[j].push(grid[i][j]);
//     }
//   }
//   return newGrid;
// }

// function infection(grid) {
//   const transformed = transform(grid);
//   let newArray = grid.map((arr) => arr.slice());

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++) {
//       if (grid[i][j] === 2) {
//         if (i === 0) {
//           if (grid[i][j + 1] === 1) {
//             newArray[i][j + 1] = 2;
//           } else if (transformed[i][j + 1] === 1) {
//             newArray[j][i] === 2;
//           }
//         }
//         if (i === grid.length - 1) {
//         }
//         if (j === 0) {
//           if (grid[i][j + 1] === 1) {
//             newArray[i][j + 1] = 2;
//           } else if (transformed[i][j + 1] === 1) {
//             newArray[j][i] === 2;
//           }
//         }
//         if (j === grid.length - 1) {
//         }
//       }
//     }
//   }
// }

// infection(grid2);

function zombieInfection(grid) {
  let currGrid = grid.flat();
  const newGrid = currGrid.slice();

  let infect = [1];
  const step = grid.length;
  let count = 0;
  while (infect.includes(1)) {
    infect = [];
    for (let i = 0; i < currGrid.length; i++) {
      if (currGrid[i] === 2) {
        if (i === 0) {
          if (currGrid[i + 1] === 1) {
            newGrid[i + 1] = 2;
            infect.push(1);
          } else if (currGrid[i + step] === 1) {
            newGrid[i + step] = 2;
            infect.push(1);
          }
        } else if (i < step) {
          if (currGrid[i - 1] === 1) {
            newGrid[i - 1] = 2;
            infect.push(1);
          } else if (currGrid[i + 1] === 1) {
            newGrid[i + 1] = 2;
            infect.push(1);
          } else if (currGrid[i + step] === 1) {
            newGrid[i + step] = 2;
            infect.push(1);
          }
        } else if ((i + 1) % step === 0) {
          if (currGrid[i - 1] === 1) {
            newGrid[i - 1] = 2;
            infect.push(1);
          } else if (currGrid[i - step] === 1) {
            newGrid[i - step] = 2;
            infect.push(1);
          } else if (currGrid[i + step] === 1) {
            newGrid[i + step] = 2;
            infect.push(1);
          }
        } else if (i % step === 0) {
          if (currGrid[i + 1] === 1) {
            newGrid[i + 1] = 2;
            infect.push(1);
          } else if (currGrid[i - step] === 1) {
            newGrid[i - step] = 2;
            infect.push(1);
          } else if (currGrid[i + step] === 1) {
            newGrid[i + step] = 2;
            infect.push(1);
          }
        } else if (i + step <= newGrid.length) {
          if (currGrid[i - 1] === 1) {
            newGrid[i - 1] = 2;
            infect.push(1);
          } else if (currGrid[i + 1] === 1) {
            newGrid[i + 1] = 2;
            infect.push(1);
          } else if (currGrid[i - step] === 1) {
            newGrid[i - step] = 2;
            infect.push(1);
          } else if (currGrid[i + step] === 1) {
            newGrid[i + step] = 2;
            infect.push(1);
          }
        } else {
          if (currGrid[i - 1] === 1) {
            newGrid[i - 1] = 2;
            infect.push(1);
          } else if (currGrid[i - step] === 1) {
            newGrid[i - step] = 2;
            infect.push(1);
          } else if (currGrid[i + 1] === 1) {
            newGrid[i + 1] = 2;
            infect.push(1);
          }
        }
      }
    }
    // displayArray(newGrid);
    currGrid = newGrid.slice();
    count++;
  }

  return count - 1;
}

console.log(zombieInfection(grid));

function displayArray(array) {
  let arr = array.flat();

  console.log(arr[0], arr[1], arr[2]);
  console.log(arr[3], arr[4], arr[5]);
  console.log(arr[6], arr[7], arr[8]);
}

const start = "hit";
const end = "cog";
const dict = ["hot", "dot", "dog", "lot", "log", "cog"];

function wordLadder(start, end, dict, count = 1, all = []) {
  let common = dict.filter((word) => getLetterDiff(word, start) === 1);

  if (common.includes(end)) {
    all.push(count + 1);
    return count + 1;
  }

  common.forEach((word) => {
    return wordLadder(
      word,
      end,
      dict.filter((word) => word != start),
      count + 1,
      all
    );
  });

  return Math.min(...all);
}

console.log(wordLadder(start, end, dict));

function getLetterDiff(a, b) {
  let letterDiff = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) letterDiff++;
  }
  return letterDiff;
}
