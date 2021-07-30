module.exports = {
  name: "setup",
  description: "setup",
 execute(message) {

    const Discord = require("discord.js");
    const fetch = require("node-fetch");
     if (message.member === message.guild.owner) {
        const setupmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Verification Setup**")
        .addField("`✔️`", `To create the roles used by Lucid Bot`, true)
        .addField("`❌`", `To remove this message`, true)
        .setFooter(`Lucid v3 | Created by Kanabayashi#0931`)
        const setupEmbed = message.reply({embed: setupmessage}).then(setup => {
        setup.react('✔️');
        setup.react('❌');

        const collector = setup.createReactionCollector(
(reaction, user) => ['❌','✔️',].includes(reaction.emoji.name) && user.id === message.author.id,
{idle: 300000}
)
collector.on('collect', reaction => {
		
        if (reaction.emoji.name === '✔️') {
                setup.delete();
                message.delete();
                reaction.users.remove(message.author.id);
                const guild = message.guild
        guild.roles.create({ data: { name: '[»] Rainbow Prestige', color: '#e63838'}});
        guild.roles.create({ data: { name: '[»] Amethyst Prestige', color: '#8828b1'}});
        guild.roles.create({ data: { name: '[»] Opal Prestige', color: '#373dc0'}});
        guild.roles.create({ data: { name: '[»] Crystal Prestige', color: '#de1be6'}});
        guild.roles.create({ data: { name: '[»] Ruby Prestige', color: '#a5070d'}});
        guild.roles.create({ data: { name: '[»] Sapphire Prestige', color: '#26c0bc'}});
        guild.roles.create({ data: { name: '[»] Emerald Prestige', color: '#17771a'}});
        guild.roles.create({ data: { name: '[»] Diamond Prestige', color: '#00f8ff'}});
        guild.roles.create({ data: { name: '[»] Gold Prestige', color: '#ffda0c'}});
        guild.roles.create({ data: { name: '[»] Iron Prestige', color: '#ffffff'}});
        guild.roles.create({ data: { name: '[»] Stone Prestige', color: '#aaa3a3'}});
        guild.roles.create({ data: { name: 'VIP', color: '#18eb23'}});
        guild.roles.create({ data: { name: 'VIP+', color: '#18eb23'}});
        guild.roles.create({ data: { name: 'MVP', color: '#2cc4ff'}});
        guild.roles.create({ data: { name: 'MVP+', color: '#2cc4ff'}});
        guild.roles.create({ data: { name: 'MVP++', color: '#fdc90c'}});
        var fkdr1 = ({ data: { name: '| 0-1 FKDR', color: '#b90000'}}); 
        var fkdr3 = ({ data: { name: '| 1-3 FKDR', color: '#b90000'}});
        var fkdr5 = ({ data: { name: '| 3-5 FKDR', color: '#b90000'}});
        var fkdr7 = ({ data: { name: '| 5-7 FKDR', color: '#b90000'}});
        var fkdr10 = ({ data: { name: '| 7-10 FKDR', color: '#b90000'}});
        var fkdr15 = ({ data: { name: '| 10-15 FKDR', color: '#b90000'}});
        var fkdr20 = ({ data: { name: '| 15-20 FKDR', color: '#b90000'}});
        var fkdr20p = ({ data: { name: '| 20+ FKDR', color: '#b90000'}});
        guild.roles.create(fkdr1);
        guild.roles.create(fkdr3); 
        guild.roles.create(fkdr5);
        guild.roles.create(fkdr7); 
        guild.roles.create(fkdr10);
        guild.roles.create(fkdr15); 
        guild.roles.create(fkdr20);
        guild.roles.create(fkdr20p);
        var wlr1 = ({ data: { name: '| 0-1 WLR', color: '#a443c2'}});
        var wlr2 = ({ data: { name: '| 1-2 WLR', color: '#a443c2'}});
        var wlr3 = ({ data: { name: '| 2-3 WLR', color: '#a443c2'}});
        var wlr5 = ({ data: { name: '| 3-5 WLR', color: '#a443c2'}});
        var wlr8 = ({ data: { name: '| 5-8 WLR', color: '#a443c2'}});
        var wlr10 = ({ data: { name: '| 8-10 WLR', color: '#a443c2'}});
        var wlr15 = ({ data: { name: '| 10-15 WLR', color: '#a443c2'}});
        var wlr15p = ({ data: { name: '| 15+ WLR', color: '#a443c2'}});
        guild.roles.create(wlr1);
        guild.roles.create(wlr2); 
        guild.roles.create(wlr3);
        guild.roles.create(wlr5);
        guild.roles.create(wlr8); 
        guild.roles.create(wlr10);
        guild.roles.create(wlr15); 
        guild.roles.create(wlr15p);
        var vrole = ({ data: { name: 'Verified', color: '#000000'}});
        var urole = ({ data: { name: 'Unverified'}});
        guild.roles.create(vrole);
        guild.roles.create(urole);
        const setupresponse = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Verification Setup**")
        .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
        .addField("`Success`", `Now to be verified use the command **!v IGN**`, true)
        .setFooter(`Lucid v3 | Created by Kanabayashi#0931`)
        const mmEmbed = message.reply({embed: setupresponse}).then(msg => {
        msg.react('❌');
        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌'].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
                            })
                        })
                 }
        if (reaction.emoji.name === '❌') {
                setup.delete();
                message.delete();
                 }
                    }) 

        })
        
        
     }
  }
}