const { readFile, writeFile } = require('fs')

console.log('começando...')
readFile('./folder/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./folder/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./folder/resultado-async.txt',
        `Aqui tá o resultado => ${first, second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('cabo a tarefa...')
        })
    })
})
console.log('começando a proxima tarefa...')
