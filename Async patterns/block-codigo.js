const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('home page :P')
    }
    if(req.url === '/about'){
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`oi ${i + j}`)
            }
        }
        res.end('nossa historia')
    }
})

server.listen(5000, () => {
    console.log('server na porta 5k')
})
