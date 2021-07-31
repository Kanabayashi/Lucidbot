module.exports = {
name: "guild",
description: "guild statistics",
execute(message, key) {
const Discord = require("discord.js");
const fetch = require("node-fetch");
let fullcommand = message.content.substr(1);
let splitcommand = fullcommand.split(" ");
let username = splitcommand.slice(1);

const hypixel = `https://api.hypixel.net/guild?key=${key}&name=${username}`;
fetch(hypixel)
.catch()
.then(response => {
        return response.json();
})

.then(guild => {
var g_name = guild["guild"]["name"];
var creation = guild["guild"]["created"]
var months_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var date = new Date(creation);
var year = date.getFullYear();
var month = months_arr[date.getMonth()];
var day = date.getDate();
var convdataTime = month + "/" + day + "/" + year + ``;
var g_tag = "[" + guild["guild"]["tag"] + "]"
var gtag = guild["guild"]["tag"]
if (gtag == undefined) {
var g_tag = " "
}
var g_desc = guild["guild"]["description"]
var g_exp = guild["guild"]["exp"]

try {
        function formatNumber(num) {
var num_parts = num.toString().split(".");
num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return num_parts.join(".");
        }
var g_exp = formatNumber(g_exp);

} catch {}
const gembed = new Discord.MessageEmbed()
.setColor(0xf1c40f)
.setTitle(`**${g_tag} ${g_name} Guild**`)
.setThumbnail('https://img.favpng.com/24/5/1/minecraft-playstation-3-computer-servers-hypixel-video-game-png-favpng-H7uNmqqzCXg1Sx88692pvsu1a.jpg')
.addField("`Time Created`", `**${convdataTime}**`, true)
.addField("`Total EXP`", `**${g_exp}**`, true)
.addField("`Guild Description`", `**${g_desc}**`)
.setTimestamp('')
.setFooter(`Lucid v3 | Created by Kanabayashi#0931`)
const geEmbed = message.reply({embed: gembed}).then(msg => {
        msg.react('📩');
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(pbembed)
                 }
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
                            })
                        })
});
      
  }
}