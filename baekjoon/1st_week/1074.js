const fs = require('fs')
const [N, r ,c ] = fs.readFileSync('./input.in').toString().split(' ').map(Number);
// r행 c열 
console.log(N, r, c); 
// 3행 1열 : 4*2 + 3 
// 4행 3열 : 37 = 16*2 