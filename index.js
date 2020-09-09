const http = require("http");
const express = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NjY1NjYwNTM3NDU5MTc5NTcz.Xho2rw.jV7rKWhNz_bCvEQ8Alzv3Tk0QO4" 
const snekfetch = require("snekfetch");
const prefix = '!';
const key = ("7f79186d-de88-440d-b4c2-d47127d6f658");
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./cmds/${file}`);
 
    client.commands.set(command.name,command);
}

client.login(token);

require('events').EventEmitter.defaultMaxListeners = 15;

client.on('ready' , () => {
    console.log("Connected as "+ client.user.tag)
    var guildlist = client.guilds.cache.size
    client.user.setActivity(`${guildlist} Servers! | !help`, {type: "WATCHING"})
    client.guilds.cache.forEach((guild) => {
});
})

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
  
  try {
  if(message.member.roles.cache.some(r=>["Verified"].includes(r.name))) {
     client.commands.get('auto_update').execute(message, args);
   }
  } catch {return}

  switch (args[0]) {
      
    case "v":
      client.commands.get('v').execute(message, args);
      
    break;
      
    case "help":
      client.commands.get('help').execute(message, args);
    break;
      
    case "bw":
      client.commands.get('bedwars').execute(message, args);
    break;

    case "sw":
      client.commands.get('skywars').execute(message, args);
    break;

    case "mm":
      client.commands.get('murder_mystery').execute(message, args);
    break;

    case "pit":
      client.commands.get('pit').execute(message, args);
    break;

    case "duels":
      client.commands.get('duels').execute(message, args);
    break;
      
    case "profile":
      client.commands.get('profile').execute(message, args);
    break;

    case "ping":
      client.commands.get('ping').execute(message, args, client);
    break;

  }
});