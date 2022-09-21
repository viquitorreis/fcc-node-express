const { basename } = require('path')
const path = require('path')
console.log(path.sep)

const filePath = path.join('/folder', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absoluto = path.resolve(__dirname, 'folder', 'subfolder', 'test.txt')
console.log(absoluto)
