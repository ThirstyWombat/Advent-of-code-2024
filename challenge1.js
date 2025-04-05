//Step #1:
// create a function that sorts through a given array of numbers and creates a new array with the numbers sorted from lowest to highest
//use that function for both inputs and save each output into a new variable (array of arrays?)
//Step #2:
//create a function that loops through the array of arrays
//New Plan:
//Seperate the the parsed input into two arrays by filtering by odd and even indexes, then sort the arrays so the elements range from lowest to highest.

// let exampleList1 = [3,4,2,1,3,3];
// let exampleList2 = [4,3,5,3,9,3];
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const lines = data.split(/\s+/);
// console.log(lines);
let sortedLines = lines.map((str) => parseInt(str));
// console.table(sortedLines);

let testArray = [14000, 100, 90, 20];

function findTotalSummedValue() {
  const column1 = sortedLines.filter((el, idx) => idx % 2 === 0);

  const column2 = sortedLines.filter((el, idx) => idx % 2 !== 0);

  const sortedColumn1 = column1.sort(function (a, b) {
    return a - b;
  });
  const sortedColumn2 = column2.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedColumn2);
  // let exampleList1 = [3,4,2,1,3,3];
  // let exampleList2 = [4,3,5,3,9,3];
}

findTotalSummedValue();
// function sortList(){
//     console.log(testArray.sort(function(a,b){
//         return a-b;
//     }));
// }

// sortList();
