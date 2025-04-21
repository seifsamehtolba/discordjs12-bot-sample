const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
require('dotenv').config()
module.exports.run = (bot, message, args) => {

	const embed = new MessageEmbed()
		.setColor("RANDOM")
		.setAuthor(`${bot.user.username} Help`, bot.user.displayAvatarURL())
		.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
		.setTimestamp();
		message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 });
	if (args[0]) {
		let command = args[0];
		let cmd;
		if (bot.commands.has(command)) {
			cmd = bot.commands.get(command);
		}
		else if (bot.aliases.has(command)) {
			cmd = bot.commands.get(bot.aliases.get(command));
		}
		if(!cmd) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${process.env.PREFIX}help\` for the list of the commands.`));
		command = cmd.help;
		embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
		embed.setDescription([
			`❯ **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
			`❯ **Description:** ${command.description || "No Description provided."}`,
			`❯ **Usage:** ${command.usage ? `\`${process.env.PREFIX}${command.name} ${command.usage}\`` : "No Usage"} `,
			`❯ **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`,
			`❯ **Category:** ${command.category ? command.category : "General" || "Misc"}`,
		].join("\n"));

		return message.channel.send(embed);
	}
	const categories = readdirSync("./commands/");
	embed.setDescription([
		`Available commands for ${bot.user.username}.`,
		`The bot prefix is **${process.env.PREFIX}**`,
		"`<>`means needed and () it is optional but don't include those",
	].join("\n"));
	categories.forEach(category => {
		const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);

		try {
			if (dir.size === 0) return;
			else if (category !== "Developer") embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
		}
		catch (e) {
			console.log(e);
		}
	});
	return message.channel.send(embed);
};

module.exports.help = {
	name: "help",
	aliases: ["h"],
	description: "Help command to show the commands",
	usage: "help (command name)",
	category: "Utility",
};