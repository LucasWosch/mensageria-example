#!/usr/bin/env node

const amqp = require("amqplib/callback_api")

amqp.connect("amqp://localhost", (error, connection) => {
    if (error) throw error

    connection.createChannel((errorChannel, channel) => {
        if (errorChannel) throw errorChannel

        const queue = "q1"
        const msg   = "first send"

        channel.assertQueue(queue, {durable: false})
        channel.sendToQueue(queue, Buffer.from(msg))
    })
})