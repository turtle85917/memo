const quick = require('quick.db')
const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

client.on('ready', async () => {
  console.log(`${client.user.username} is login!`)
})
