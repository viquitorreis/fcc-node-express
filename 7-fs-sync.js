const { readFileSync, writeFileSync } = require('fs')

console.log('começando...')
const first = readFileSync('./folder/first.txt', 'utf-8')
const second = readFileSync('./folder/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './folder/resultado-sync.txt',
    `Aqui tá o resultado => ${first, second}`,
    { flag: 'a'},
)

console.log('terminando...')
console.log('...começando outro...')
