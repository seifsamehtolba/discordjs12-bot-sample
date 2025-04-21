const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {
    message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));


        if (args[0].toLowerCase() === "embed") {
            const embed = new MessageEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor("Purple");

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }}

module.exports.help = {
	name: "say",
	aliases: ["s"],
	description: "Makes bot talk. (Only for Mods)",
	usage: "say (embed) <text>",
	category: "Moderation",
};