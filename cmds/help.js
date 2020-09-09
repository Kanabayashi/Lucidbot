module.exports = {
  name: "help",
  description: "help",
  execute(message, args) {
    
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const { token } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";
    
    const helpmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Command List**")
        .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
        .addField("`!bw {IGN}`", `Bedwars Stats`, true)
        .addField("`!sw {IGN}`", `Skywars Stats`, true)
        .addField("`!mm {IGN}`", `Murder Mystery Stats`, true)
        .addField("`!pit {IGN}`", `The Pit Stats`, true)
        .addField("`!duels {IGN}`", ` Duels Stats`, true)
        .addField("`!profile {IGN}`", ` Player Profile`, true)
        .addField("`!v {IGN}`", `Updates Bedwars Roles`, true)
        .addField("`!ping`", ` Ping & Uptime`, true)
        .addField("`Help Server`", `[**Lucid Guild**](https://discord.gg/kmqdwxG)`,true)
        .setFooter(`Lucid v2.4.0 | Created by Kanabayashi#0931 & Bluq#2277`)
        message.author.send(helpmessage)
        message.channel.send(helpmessage)
  }

}