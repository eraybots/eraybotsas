const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(1);	
message.channel.send("!playing").then(msg => {
	msg.delete(100)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'müzikisim', 
  description: 'Müzik İsmini Yazar',
  usage: 'müzikisim'
};
