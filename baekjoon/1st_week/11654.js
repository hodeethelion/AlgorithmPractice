fs = require('fs')
const character = fs.readFileSync('./input.in', 'utf8');
const char = character.charCodeAt(0);
console.log(char)