function exampleTest() {
  let results = [];

  let exampleList1 = [3, 4, 2, 1, 3, 3];
  let exampleList2 = [4, 3, 5, 3, 9, 3];

  let exampleList1SORTED = exampleList1.sort(function (a, b) {
    return a - b;
  });

  let exampleList2SORTED = exampleList2.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < exampleList1SORTED.length; i++) {
    results.push(exampleList1SORTED[i] - exampleList2SORTED[i]);
  }
  console.log(results.reduce((a, b) => a + b, 0));
}
// Acquires the input from the input.txt file, maps it into an array, parses it into integers, then filters out any remaining empty spaces
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const lines = data.split(/\s+/);

let sortedLines = lines.map((str) => parseInt(str));

let sortedLinesFiltered = sortedLines.filter(Boolean);

function findTotalSummedValue() {
  //Splits the initial array into two arrays filtered by odd and even indexes
  const column1 = sortedLinesFiltered.filter((el, idx) => idx % 2 === 0);

  const column2 = sortedLinesFiltered.filter((el, idx) => idx % 2 !== 0);
  // Sorts all elements in both arrays from lowest integer to highest
  const sortedColumn1 = column1.sort(function (a, b) {
    return a - b;
  });
  const sortedColumn2 = column2.sort(function (a, b) {
    return a - b;
  });

  let comparison = [];

  //for loop solution part 1:
  for (let i = 0; i < sortedColumn1.length; i++) {
    let difference = sortedColumn1[i] - sortedColumn2[i];
    if (difference < 0) {
      difference = difference * -1;
    }
    comparison.push(difference);
  }
  //for loop solution part 2:
  let results = [];
  for (let i = 0; i < sortedColumn1.length; i++) {
    let leftNumber = sortedColumn1[i];
    let count = 0;

    for (let j = 0; j < sortedColumn2.length; j++) {
      if (leftNumber === sortedColumn2[j]) {
        count = count + 1;
      }
    }

    results.push(leftNumber * count);
  }

  let totalSummedValue = comparison.reduce((a, b) => a + b, 0);

  let part2Summed = results.reduce((a, b) => a + b, 0);

  console.log("total summed value Part 1>", totalSummedValue);
  console.log("Part 2 summed >", part2Summed);
}
// exampleTest();
findTotalSummedValue();
