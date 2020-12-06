const db = require('quick.db')
const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

client.on('ready', async () => {
  console.log(`${client.user.username} is login!`);
})

client.on('message', async (message) => {
  if (message.author.bot || message.system) return;
  let prefix = process.env.prefix;
  let memo = message.content.split(' ').slice(2).join(' ');
  
  if (message.content.startsWith(`${prefix} 메모`)) {
    if(db.get(`${memo}_${message.author.id}`)) return message.channel.send(`\`${memo}\`(은)는 이미 노트에 저장되어 있어요!`)
    db.set(`${memo}_${message.author.id}`, memo)
    message.channel.send(`\`${memo}\`(을)를 노트에 적어놨어요!`)
  }
  else if (message.content == `${prefix} 노트`) {
    db.all().filter(x => x.endsWith(`_${message.author.id}`)).map(x => message.channel.send(`${db.get(x)}`)).join('\n')
  }
  else if (message.content == `${prefix} 삭제`) {
    if(!db.get(`${memo}_${message.author.id}`)) return message.channel.send(`\`${memo}\`(은)는 노트에 저장되어 있지 않아요!`)
    db.delete(`${memo}_${message.author.id}`)
    message.channel.send(`\`${memo}\`(을)를 노트에서 지웠어요!`)
  }
})

client.login(process.env.token)
