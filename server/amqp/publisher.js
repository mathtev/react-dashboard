const express = require('express');
const amqp = require('amqplib');

let channel, connection;

connect();
async function connect() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue('session');
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = async (data) => {
  await channel.sendToQueue('session', Buffer.from(JSON.stringify(data)));
};

