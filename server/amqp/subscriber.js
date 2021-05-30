const express = require("express");
const app = express();
const PORT = 4001;
const amqp = require("amqplib");

let channel, connection;

connect();
async function connect() {
    try {
        const amqpServer = "amqp://localhost";
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("session");
        channel.consume("session", data => {
            console.log(`Received data at 4001: ${Buffer.from(data.content)}`);
            channel.ack(data);
        });
    } catch (ex) {
        console.error(ex);
    }
}

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
});