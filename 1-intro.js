const nomes = require('./2-util')
const data = require('./3-systaxAlt')
console.log(data.pessoaSozinha)
const falaOi = (nome) => {
    console.log(`Oi pessoal ${nome}`)
}

// falaOi(nomes.victor)
// falaOi('Victor Reis')
// falaOi(nomes.cicero)

module.exports = {
    falaOi,
}