module.exports.run = (bot, message, args) => {
    if(!message.member.roles.cache.some(r=>["Administrator"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
     member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`**${member.user.tag}** has been banned by **${message.author.tag}** reason: **${reason}**`);
}

module.exports.help = {
	name: "ban",
	aliases: ["b"],
	description: "Bans a member",
	usage: "ban <member> (reason)",
	category: "Moderation",
};