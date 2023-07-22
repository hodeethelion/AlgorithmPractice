const fs = require('fs')
let wordlist = fs.readFileSync('./input.in').toString().trim().split('\n')
wordlist = wordlist.slice(1)
// console.log(wordlist);
let wordObjects = []
wordlist.forEach((word, index, list) =>{
  if (!wordObjects.find(obj => obj.word === word))
  {wordObjects.push({
    word: word,
    len: word.length
  })}
})

wordObjects.sort((a,b) => {
  if (a.len < b.len) return -1;
  if (a.len > b.len) return 1;
  return a.word.localeCompare(b.word);
})
// console.log(wordObjects)
for (objs of wordObjects){
  console.log(objs.word)
}