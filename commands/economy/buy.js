const db = require('quick.db')
const {MessageEmbed} = require('discord.js');
module.exports.run = async (bot, message, args) => { 
    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ You need 2000 coins to purchase Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔ Purchased Bronze VIP For 3500 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`❌ You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔ Purchased Fresh Nikes For 600 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`❌ You need 800 coins to purchase a new car`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔ Purchased a New Car For 800 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`❌ You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✔ Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription('❌ Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: ["get"],
    description: "Buy Something from the Shop!",
    usage: "shop <item> (amount)",
    category: "Economy",
  }