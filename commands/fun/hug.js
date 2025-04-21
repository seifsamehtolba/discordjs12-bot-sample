
const giphy = require("giphy-api")('j5ZrzgkWeNEPFdZt35oe8dBrUme1zLsL');
const {MessageEmbed} = require("discord.js");
module.exports.run = async (bot, message,args) => { 
    giphy.search('couple hug').then(function (res) {
        var totalress = res.data.length;
        var resIndex = Math.floor((Math.random() * 10) + 1) % totalress;
        
        let embed = new MessageEmbed()
        .setColor(0x00ae86)
        .setDescription(`${message.author} hugged ${message.mentions.members.first()}.`)
        .setImage(res.data[resIndex].images.original.url);
        message.channel.send({embed:embed});
        }) 
        };

module.exports.help = {
	name: "hug",
	aliases: ["UwU"],
	description: "Hug a person LMAO.",
	usage: "hug <person>",
	category: "Fun",
};