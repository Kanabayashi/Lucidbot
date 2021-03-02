const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!';
const fs = require("fs");
const Database = require("@replit/database")
const db = new Database()

db.get("token").then(value => {
client.login(value);
});

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