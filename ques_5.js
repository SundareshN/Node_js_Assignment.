//TCP server and client program

//TCP Server
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected:', socket.remoteAddress);
    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
        socket.write(`Server received: ${data}`);
    });
    socket.on('end', () => {
        console.log('Client disconnected:', socket.remoteAddress);
    });
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});
server.listen(8080, () => {
    console.log('TCP server is running on port 8080');
});

/*output:
TCP server is running on port 8080
Client connected: 127.0.0.1
Received from client: Hello, server! This is the client.
*/

//TCP Client
const net = require('net');
const client = new net.Socket();
client.connect(8080, '127.0.0.1', () => {
    console.log('Connected to server');
    client.write('Hello, server! This is the client.');
});
client.on('data', (data) => {
    console.log('Received from server:', data.toString());
    client.destroy();
});

client.on('error', (err) => {
    console.error('Client error:', err);
});

client.on('close', () => {
    console.log('Connection closed');
});

/*output:
Connected to server
Received from server: Server received: Hello, server! This is the client.
Connection closed
*/




