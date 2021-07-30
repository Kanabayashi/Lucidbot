const Discord = require("discord.js");
const client = new Discord.Client();
const Database = require("@replit/database")
const db = new Database()
const prefix = '!';
const fs = require("fs");

client.commands = new Discord.Collection();

db.get("token").then(value => {
client.login(value);
});

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./cmds/${file}`);
 
    client.commands.set(command.name,command);
}
client.on('ready' , () => {
    console.log("Connected as "+ client.user.tag)
    var guildlist = client.guilds.cache.size
    client.user.setActivity(`${guildlist} Servers! | !help`, {type: "WATCHING"})
})
db.get("key").then(value => {
const key = value

client.on('message', message => {
  let args = message.content.substring(prefix.length).split(" ");
//try {
 // if(message.member.roles.cache.some(r=>["Verified"].includes(r.name))) {
     //client.commands.get('auto_update').execute(message, key, args);
   //}
  //} catch {return}
  switch (args[0]) {
      
    case "v":
      client.commands.get('v').execute(message, key);
      
    break;
      
    case "help":
      client.commands.get('help').execute(message, args);
    break;

    case "setup":
      client.commands.get('setup').execute(message, key);
    break;
      
    case "bw":
      client.commands.get('bedwars').execute(message, key);
    break;

    case "bb":
      client.commands.get('build_battle').execute(message, key);
    break;

    case "sw":
      client.commands.get('skywars').execute(message, key);
    break;

    case "mm":
      client.commands.get('murder_mystery').execute(message, key);
    break;

    case "sh":
      client.commands.get('super_smash').execute(message, key);
    break;

    case "pb":
      client.commands.get('paintball').execute(message, key);
    break;

    case "pit":
      client.commands.get('pit').execute(message, key);
    break;

    case "cvc":
      client.commands.get('cops_vs_criminals').execute(message, key);
    break;

    case "duels":
      client.commands.get('duels').execute(message, key);
    break;

    case "quake":
      client.commands.get('quake').execute(message, key);
    break;

    case "profile":
      client.commands.get('profile').execute(message, key);
    break;

    case "walls":
      client.commands.get('walls').execute(message, key);
    break;

    case "mw":
      client.commands.get('mega_walls').execute(message, key);
    break;

    case "ping":
      client.commands.get('ping').execute(message, client, Discord);
    break;

  }
});
});