const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    console.log(`Mensaje recibido del cliente: ${data}`);
    socket.write(`El servidor recibió: ${data}`);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.write('Bienvenido al servidor!\n');
});

server.listen(8080, () => {
  console.log('Servidor escuchando en puerto 8080');
});