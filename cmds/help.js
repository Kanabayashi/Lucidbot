module.exports = {
  name: "help",
  description: "help",
  execute(message) {
    
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    const helpmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Command List**")
        .addField("`!bw {IGN}`", `Bedwars Stats`, true)
        .addField("`!sw {IGN}`", `Skywars Stats`, true)
        .addField("`!mm {IGN}`", `Murder Mystery Stats`, true)
        .addField("`!mw {IGN}`", `Mega Walls Stats`, true)
        .addField("`!bb {IGN}`", `Build Battle Stats`, true)
        .addField("`!qc {IGN}`", `Quakecraft Stats`, true)
        .addField("`!sh {IGN}`", `Smash Heros Stats`, true)
        .addField("`!pb {IGN}`", `Paintball Stats`, true)
        .addField("`!pit {IGN}`", `The Pit Stats`, true)
        .addField("`!cvc {IGN}`", `Cops Vs Crim Stats`, true)
        .addField("`!duels {IGN}`", ` Duels Stats`, true)
        .addField("`!walls {IGN}`", ` The Walls Stats`, true)
        .addField("`!profile {IGN}`", ` Player Profile`, true)
        .addField("`!v {IGN}`", `Updates Bedwars Roles`, true)
        .addField("`!g {GUILD}`", `Guild Stats`, true)
        .addField("`!ping`", ` Ping & Uptime`, true)
        .addField("`!setup`", ` Creates bot roles (Owner Only)`, true)
        .setFooter(`Lucid v3 | Created by Kanabayashi#0931`)
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