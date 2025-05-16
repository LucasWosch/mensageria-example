#!/usr/bin/env node

const amqp = require("amqplib/callback_api")


amqp.connect("amqp://localhost", (error, connection) => {
    if (error) throw error;
    execConnection(connection);
})

const execConnection = (connection) => {
    
    connection.createChannel((error, channel) => {
        if (error) throw error;
        buildChannel(channel);
    })
}

const buildChannel = (channel) => {
    const queue     = "q1";

    channel.assertQueue(queue, {durable: false})
    channel.consume(queue, showMensage, {noAck:true})
}

const showMensage   = (mensage) => console.log(`Mensage received: ${mensage.content.toString()}`)