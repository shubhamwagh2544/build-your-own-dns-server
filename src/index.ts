import * as dgram from "node:dgram";

console.log('Hello, world!');

const udpSocket: dgram.Socket = dgram.createSocket('udp4');
udpSocket.bind(2053, '127.0.0.1');

udpSocket.on('message', (data: Buffer, remoteAddress: dgram.RemoteInfo) => {
    try {
        console.log(`received data from ${remoteAddress.address}:${remoteAddress.port} : `, data.toString());
        const response = Buffer.from("");
        udpSocket.send(response, remoteAddress.port, remoteAddress.address);
    } catch (error) {
        console.log('error sending data: ', error);
    }
});