module.exports = {
  name: "ping",
  description: "Ping The Bot - Bot Statistics",
  execute(message, args, client) {
    const Discord = require("discord.js");

    const {
      token
    } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let second = totalSeconds % 60;
    let seconds = second.toFixed(0);

    var uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    //var uptime = (`${days}d ${hours}h ${minutes}m ${seconds}s`)
    var latency = Math.floor(Date.now() - message.createdTimestamp) + "ms";
    const ping = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle(":satellite:  Ping Complete")
      .addField(`Latency:`, `${latency}`)
      .addField(`Uptime:`, `${uptime}`)
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.4.0 | Created by Kanabayashi#0931 & Bluq#2277`);
    message.channel.send(ping);
  }
};
