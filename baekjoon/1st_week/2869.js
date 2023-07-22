fs = require("fs");
const [a, b, v] = fs
  .readFileSync("./input.in")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let leftHeight = v - a;
if (leftHeight <= 0) {
  console.log(1);
} else {
  let leftDay = 0;
  let number = leftHeight % (a - b);
  if (number === 0) {
    leftDay = leftHeight / (a - b);
  } else {
    leftDay = Math.floor(leftHeight / (a - b)) + 1;
  }
  console.log(leftDay + 1);
}
