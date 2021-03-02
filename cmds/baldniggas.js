module.exports = {
  name: "bald",
  description: "baldniggas",
  execute(message) {
    
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    const helpmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**BALD NIGGAS MC**")
        .setThumbnail(`https://i.pinimg.com/236x/47/05/01/4705015bfbf8924e89fb963ff253fc44.jpg`)
        .setFooter(`Created by FadingLight#0931`)
 const helpEmbed = message.reply({embed: helpmessage}).then(help => {
help.react('📩');
help.react('❌');

const collector = help.createReactionCollector(
(reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
{idle: 300000}
)
collector.on('collect', reaction => {
		
        if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(helpmessage)
                 }
        if (reaction.emoji.name === '❌') {
                help.delete();
                message.delete();
                 }
                    }) 

        })
  }

}