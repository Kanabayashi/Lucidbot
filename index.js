const http = require("http");
const express = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "ODE1MDE4Njk2MjA3NzYxNDE5.YDmTTw.slhJNbOvMEnmCmQhwtsRYHU4v-g"
const prefix = '!';
const key = ("7f79186d-de88-440d-b4c2-d47127d6f658");
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./cmds/${file}`);
 
    client.commands.set(command.name,command);
}

client.on('ready' , () => {
    console.log("Connected as "+ client.user.tag)
    client.user.setActivity(`ChronicMC`, {type: "WATCHING"})

})

client.login(token);

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('815026530018263060').reply(`Welcome ${member} to ChronicMC`); 
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Member"));
});

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
      
    case "v":
      client.commands.get('v').execute(message, args);
      
    break;
      
    case "help":
      client.commands.get('help').execute(message, args);
    break;

    case "bald":
      client.commands.get('bald').execute(message, args);
    break;

    case "ping":
      client.commands.get('ping').execute(message, args, client);
    break;
  }
});