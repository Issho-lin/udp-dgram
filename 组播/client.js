const dgram = require('dgram')

const client = dgram.createSocket('udp4')

client.on('listening', () => {
    const { address, port } = client.address()
    console.log(`client run on ${address}:${port}`)

    client.addMembership('224.0.1.100')
})

client.on('message', (message, remote) => {
    console.log(message.toString(), remote)
})

client.bind(8000)