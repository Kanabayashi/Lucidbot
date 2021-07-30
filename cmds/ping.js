
module.exports = {
  name: "ping",
  description: "Ping The Bot - Bot Statistics",
  cooldown: 5,
  execute(message, client, Discord) {
    const ms = require("ms");
    var latency = Math.floor(Date.now() - message.createdTimestamp) + "ms";
    var duration = ms(client.uptime);
    console.log(duration);
    const ping = new Discord.MessageEmbed()
      //.setThumbnail('https://i1.sndcdn.com/artworks-000500942382-fj86p2-t500x500.jpg')
      .setTitle(":satellite:  Ping Complete")
      .addField("`Mem Usage`", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
      .addField("`Uptime`", `**${duration}**`)
      .addField("`Latency`", `**${latency}**`)
      //.addField(`Uptime:`, `${uptime}`)
      .addField("`Invite`", `[**Lucid Bot**](https://discord.com/oauth2/authorize?client_id=665660537459179573&scope=bot&permissions=8)`)
      .setColor(0xf1c40f)
      .setFooter(`Lucid v3 | Created by Kanabayashi#0931`);
    const pingEmbed = message.channel.send({embed: ping}).then(msg => {
        msg.react('📩');
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(ping)
                 }
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                 }
        })
        })
  }
};
