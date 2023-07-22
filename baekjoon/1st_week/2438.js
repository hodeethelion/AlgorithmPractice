const fs = require("fs");
const nStar = Number(fs.readFileSync("./input.in").toString());
// console.log(nStar);

let stars = "";
if (nStar === 1) {
  console.log("*");
} else {
  for (i = 1; i < nStar + 1; i++) {
    // console.log('*');
    stars = "";
    for (k = 1; k < i + 1; k++) {
      stars += "*";
    }
    console.log(stars);
  }
}
