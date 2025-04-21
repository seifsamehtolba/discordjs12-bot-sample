const db = require("quick.db");
const ms = require("parse-ms");
const {MessageEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => { 

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`❌ Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`❌ Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`❌ You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`❌ You don't have that much money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`✔ You have payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}
module.exports.help = {
    name:"pay",
    aliases: ["share"],
    description: "share your cash!",
      usage: "pay <person> <amount>",
      category: "Economy",
  }