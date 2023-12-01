const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let splitString = string.split("\n");
let twodArray = [];
//console.log(splitString);
splitString.forEach((string) => {
  twodArray.push(string.split(","));
});
//Part 2 Done
//console.log(twodArray);

let objectArray = [];

for (let i = 1; i < twodArray.length; i++) {
  objectArray.push({})
  for (let j = 0; j < twodArray[i].length; j++) {
    console.log(twodArray[i][j]);
    if(j === 0){
      objectArray[i-1]["id"] = twodArray[i][j];
    }else if(j === 1){
      objectArray[i-1]["name"] = twodArray[i][j];
    }else if(j === 2){
      objectArray[i-1]["occupation"] = twodArray[i][j];
    }else if(j ===3){
      objectArray[i-1]["age"] = twodArray[i][j];
    }
  }
}

console.log(objectArray);
////Part 3 Done!!!


// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";

// const outerArray = [];

// let row = 1;
// let counter = 1;
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === ",") {
//     counter += 1;
//   }
//   if (string[i] === "\n") {
//     console.log("Row: ", row);
//     row += 1;
//     console.log(cell1, cell2, cell3, cell4);
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//     counter = 1;
//     continue;
//   }

//   if (counter === 1) {
//     cell1 = cell1 + string[i];
//     // console.log(cell1);
//     //add in cell 1
//   }
//   if (counter === 2) {
//     cell2 = cell2 + string[i];
//     //add in cell 2
//   }
//   if (counter === 3) {
//     cell3 = cell3 + string[i];
//     //add in cell 3
//   }
//   if (counter === 4) {
//     cell4 = cell4 + string[i];
//     //add in cell 3
//   }
// }
// console.log(cell1, cell2, cell3, cell4);
