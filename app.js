const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./folder/first.txt', 'utf-8')
        const second = await readFile('./folder/second.txt', 'utf-8')
        await writeFile(
            './folder/resultado-mind-grenade.txt',
            `top demais chef ${first, second}`,
            { flag: 'a' })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
