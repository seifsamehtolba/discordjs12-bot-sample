const {MessageEmbed} = require("discord.js");
module.exports.run = (bot, message, args) => {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
		const _ = new MessageEmbed()
		  .setTitle("Pong!")
		  .setDescription(
			`🏓 Pong!\nLatency is ${Math.floor(
			  msg.createdTimestamp - message.createdTimestamp
			)}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
		  )
		  .setColor("RANDOM");
		msg.edit(_);
		msg.edit("\u200B");
	  });
	};

module.exports.help = {
	name: "ping",
	aliases: ["p"],
	description: "Makes sure the bot is online and active",
	usage: "ping",
	category: "Utility",
};