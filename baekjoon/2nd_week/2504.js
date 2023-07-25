const fs = require('fs');
let readLine = fs.readFileSync('./input.in').toString().trim();

// Replace () with 2 and [] with 3
let ans = readLine.replace(/\(\)/g, '2').replace(/\[\]/g, '3');
console.log(ans);
