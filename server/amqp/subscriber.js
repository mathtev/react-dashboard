const express = require('express');
const app = express();
const PORT = 4001;
const amqp = require('amqplib');

let channel, connection;
let receivedData = [];

connect();
async function connect() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue('session');
    channel.consume('session', (data) => {
      receivedData.push(JSON.parse(Buffer.from(data.content)));
      console.log(`Received data at 4001: ${receivedData}`);
      channel.ack(data);
    });
  } catch (ex) {
    console.error(ex);
  }
}

app.get('/loghistory', function(req, res) {
  res.send(receivedData);
});

app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});
