const db = require("quick.db");
const {MessageEmbed} = require("discord.js");
exports.run = async (bot, message, args) => {
  let ownerID = '741310473219080203'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`✔ Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
    name:"addmoney",
    aliases: ["add"],
    description: "Owner Gives you Money ;)",
      usage: "addmoney <user> <amount>",
      category: "Economy",
  }