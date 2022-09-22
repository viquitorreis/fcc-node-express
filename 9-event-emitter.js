const eventEmitter = require('events')

const customEmitter = new eventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`dados recebidos nome --> ${name} id --> ${id}`)
})

customEmitter.on('response', () => {
    console.log(`... dnv... dados recebidos`)
})

customEmitter.emit('response', 'Victor', 1)
