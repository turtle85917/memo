const knex = require("knex"),
  db = knex({client: "sqlite3", connection: { filename: process.env.FILE }}),
  { Client, MessageEmbed } = require('discord.js'),
  client = new Client()

client.on('ready', async () => {
  console.log(`${client.user.username} is login!`);
})

client.on('message', async (message) => {
  if (message.author.bot || message.system) return;
  let prefix = process.env.prefix;
  let memo = message.content.split(' ').slice(2).join(' ')
  
  if (message.content.startsWith(`${prefix} 메모`)) {
    if ((await client.db('memo').where({ id: message.author.id, title: memo }))[0]) return message.channel.send(`\`${memo}\`(은)는 이미 노트에 저장되어 있어요!`)
    await client.db('memo').insert({ id: message.author.id, title: memo });
    message.channel.send(`\`${memo}\`(을)를 노트에 적어놨어요!`)
  }
  else if (message.content == `${prefix} 노트`) {
    (client.db("book")).then(async(e) => {
      let s = e.filter(c => c.id === message.author.id),
          str = [];
      if (!s[0]) return message.channel.send("노트가 비워있어요!");
      for (let i = 0;i < e.length; i++) {
        str.push(s[i].title);
      }
      message.channel.send(new MessageEmed().setColor("GREEN").setTitle(`${message.author.username}님에 노트`).setDescription(str.join("\n")));
    })
  }
  else if (message.content == `${prefix} 삭제`) {
    if (!(await client.db('memo').where({ id: message.author.id, title: memo }))[0]) return message.channel.send(`\`${memo}\`(은)는 노트에 저장되어 있지 않아요!`)
    await client.db('memo').delete().where({ id: message.author.id, title: memo });
    message.channel.send(`\`${memo}\`(을)를 노트에서 지웠어요!`)
  }
})

client.login(process.env.token)
