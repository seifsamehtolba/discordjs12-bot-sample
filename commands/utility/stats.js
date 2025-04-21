const {MessageEmbed} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
module.exports.run = (bot, message, args) => {
        let cpuLol;
        cpuStat.usagePercent(function(err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const embedStats = new MessageEmbed()
                .setColor(`BLUE`)    
                .setThumbnail(bot.user.displayAvatarURL)
                .setAuthor('Omni Support Info', bot.user.displayAvatarURL)
                .addField("Developer ", "``Seif Sameh``", true)
                .addField("Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)           
                .addField("CPU Usage", `\`${percent.toFixed(2)} %\``, true)
            .addField("Arch", `\`${os.arch}\``, true)
            .addField("OS Platform", `\`${os.platform}\``, true)
            .addField("OS Hostname", `\`${os.hostname}\``, true)
            .addField("OS Uptime", `\`${os.uptime} ms\``, true)
            
                message.channel.send(embedStats)
        });
    };

module.exports.help = {
	name: "stats",
	aliases: ["sts"],
	description: "Shows Bot Stats",
	usage: "stats",
	category: "Utility",
};