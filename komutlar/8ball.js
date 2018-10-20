const Discord = require("discord.js")

const { version } = require("discord.js");

const moment = require("moment");

const m = require("moment-duration-format");

let os = require('os')

let cpuStat = require("cpu-stat")

const ms = require("ms")

exports.run = (bot, message, args) => {

    let cpuLol;

    cpuStat.usagePercent(function(err, percent, seconds) {

        if (err) {

            return console.log(err);

        }

        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

        const embedStats = new Discord.RichEmbed()

            .setAuthor(bot.user.username)

            .setTitle("***BOT Bilgi***")

            .setColor("RANDOM")

            .addField("• Ram Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)

            .addField("• Açık Kalma Süresi ", `${duration}`, true)

            .addField("• Kullanıcı", `${bot.users.size.toLocaleString()}`, true)

            .addField("• Sunucular", `${bot.guilds.size.toLocaleString()}`, true)

            .addField("• Kanallar ", `${bot.channels.size.toLocaleString()}`, true)

            .addField("• Discord.js", `v${version}`, true)

            .addField("• Node", `${process.version}`, true)

            .addField("• İşlemci", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)

            .addField("• İşlemci Kullanımı", `\`${percent.toFixed(2)}%\``, true)

            .addField("• Bit", `\`${os.arch()}\``, true)

            .addField("• Sistem", `\`\`${os.platform()}\`\``, true)

            .addField("API Pingi", `${Math.round(bot.ping)}ms`)  

        message.channel.send(embedStats)

    });

}




















exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 2 
};

exports.help = {
  name: 'botbilgi', 
  description: 'BotBilgileri',
  usage: 'botbilgi'
};
