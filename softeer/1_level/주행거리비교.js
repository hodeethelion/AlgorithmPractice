const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let sum = [];
let arr = [];
let i = 0;
//input
rl.on('line', input => {
    numList = input.split(' ').map(Number);
    if (i === 0){
        i++;
    }else{
        console.log(`Case #${i}: ${numList[0] + numList[1]}`);
        i++;
    }
})

rl.on('close', () => {
})