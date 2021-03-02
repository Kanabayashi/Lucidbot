module.exports = {
  name: "help",
  description: "help",
  execute(message) {
    
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    const helpmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Help Center**")
        .addField("`Sled Fast Eat Ass Smoke Grass`", `"Insert Relevent Information Here"`)
        .addField("`!bald`", `Experience Culture`)
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