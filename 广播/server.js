const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('listening', () => {
    const { address, port } = server.address()
    console.log(`server run on ${address}:${port}`)

    server.setBroadcast(true)

    setInterval(() => {
        server.send('hello', 5000, '255.255.255.255')
    }, 3000)
})

server.on('message', (message, remote) => {
    console.log(message.toString(), remote)
})

server.bind(3000, () => {
    // server.addMembership('192.168.2.253')
})