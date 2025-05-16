#!/usr/bin/env node

const amqp = require("amqplib/callback_api")


amqp.connect("amqp://localhost", (error, connection) => {
    if (error) throw error;
    execConnection(connection)
})

const execConnection = (connection) => {
    
    connection.createChannel((error, channel) => {
        if (error) throw error;
        buildChannel(channel)
    })
}

const buildChannel = (channel) => {

}