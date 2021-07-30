module.exports = {
  name: "skywars",
  description: "skywars statistics",
  execute(message, key) {

    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    let fullcommand = message.content.substr(2);
    let splitcommand = fullcommand.split(" ");
    let username = splitcommand.slice(1);

const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
      .catch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;

        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch()
          .then(response => {
            return response.json();
          })

          .then(player => {
            var dname = player["player"]["displayname"];
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
            var coins = player["player"]["stats"]["SkyWars"]["coins"];
            var gatheredsouls = player["player"]["stats"]["SkyWars"]["souls_gathered"];
            var ptime =player["player"]["stats"]["SkyWars"]["time_played"];
            var x = ptime;
            var l = x / 60;
            var s = l / 60; 
            var timep = s.toFixed(2)
            var ftime =player["player"]["stats"]["SkyWars"]["fastest_win"];
            var ft = ftime;
            var tdeci = ft / 60;
            var fastwin = tdeci.toFixed(2)
            var assits = player["player"]["stats"]["SkyWars"]["assists"];
            var lvlform = player["player"]["stats"]["SkyWars"]["levelFormatted"];
            var level = lvlform.substr(2);
            var winstreak = player["player"]["stats"]["SkyWars"]["win_streak"];
            var heads = player["player"]["stats"]["SkyWars"]["heads"];
            var loss = player["player"]["stats"]["SkyWars"]["losses"];
            var wins = player["player"]["stats"]["SkyWars"]["wins"];
            var kills = player["player"]["stats"]["SkyWars"]["kills"];
            var deaths = player["player"]["stats"]["SkyWars"]["deaths"];
            var b = kills;
            var c = deaths;
            var d = b / c;
            var kdrdeci = d;
            var kdr = kdrdeci.toFixed(2);
            var a = wins;
            var b = loss;
            if (loss == null) {var b = 1;}
            var c = a / b;
            var wlrdeci = c;
            var wlr = wlrdeci.toFixed(2);
            var gamemode = player["player"]["mostRecentGameType"];
            if (typeof gamemode === "undefined") {
              var gamemode = "Limbo";
            }
            var lastlogin = player["player"]["lastLogin"];
            var lastlogout = player["player"]["lastLogout"];
            var vtime = new Date(lastlogout);
            var ts = new Date();
            var h = lastlogout;
            var i = lastlogin;
            var j = h - i;
            var lastl = j;
            var j = lastl;
            let d2args = player["player"]["newPackageRank"];
  	switch (d2args) {
		case "VIP":
   			var drank = "[VIP]"
    		break;
		case "VIP_PLUS":
   			var drank = "[VIP+]"
    		break;
		case "MVP":
   			var drank = "[MVP]"
    		break;	
		case "MVP_PLUS":
   			var drank = "[MVP+]"		
	}
	let dargs = player["player"]["rank"];
  	switch (dargs) {
		case "YOUTUBE":
   			var drank = "[Youtube]"
    		break;
		case "HELPER":
   			var drank = "[Helper]"
    		break;
		case "MOD":
   			var drank = "[Mod]"
    		break;	
		case "ADMIN":
   			var drank = "[Admin]"
    		break;	
		case "OWNER":
   			var drank = "[Owner]"
    		break;	
		case "NONE":
   			var drank = " "
    		break;		
	}
        let pref = player["player"]["prefix"];
  	switch (pref) {
		case "§3[BUILD TEAM]":
   			var drank = "[Build Team]"
    		break;
		case "§d[PIG§b+++§d]":
   			var drank = "[PIG+++]"
    		break;			
	}
        let mpack = player["player"]["monthlyPackageRank"];
  	switch (pref) {
		case "SUPERSTAR":
   			var drank = "[MVP++]"
    		break;		
	}
            try {
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var kills = formatNumber(kills);
            var deaths = formatNumber(deaths);
            var gatheredsouls = formatNumber(gatheredsouls);
            var wins = formatNumber(wins);
            var loss = formatNumber(loss);
            var coins = formatNumber(coins);
            var timep = formatNumber(timep);
            var fastwin = formatNumber(fastwin);
            var assists = formatNumber(assists);
            var kdr = formatNumber(kdr);
            var wlr = formatNumber(wlr);
            var winstreak = formatNumber(winstreak);
            var heads = formatNumber(heads);
            } catch {}

           var skin = `https://mc-heads.net/body/${id}/left?`+ (new Date()).getTime();
           var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;
              fetch(guildname)
                .then(response => {
                  return response.json();
                })
                .then(guild => {
                  var guildn = guild["guild"];

                  var guildstats = `https://api.hypixel.net/guild?key=${key}&id=${guildn}`;
                  fetch(guildstats)
                    .then(response => {
                      return response.json();
                    })
                    .then(guilds => {
                      try {
                        var nnguild = guilds["guild"]["name"];
                        var nguild = nnguild.replace(/ /g,"%20");
                      } catch {
                        var nnguild = "None";
                      }
                      try { var guildt = "[" + guilds['guild']['tag'] + "] " } catch {var guildt = " "}
            if (lastlogin > lastlogout) {
               var lastl = ('Online')
               var footer = (`Lucid v3 | ${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`) 
               var footp = ("http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png")
               var color = ('#00FF00')
            }
            if (lastlogin < lastlogout) {
               var lastl = ('Offline')
               var footer = (`Lucid v3 | ${dname}'s ${lastl} | Last Seen In ${gamemode}! | ${version}`)
               var footp = ("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png")
               var color = ('#b22121')
                }
                    const pbembed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle('**Skywars**')
                    .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png')
                    .addField("`Player`", `[**${drank} ${dname} ${guildt}**](https://plancke.io/hypixel/player/stats/${username})`)
                    .addField("`KDR`", `**${kdr}**`, true)
                    .addField("`Kills`", `**${kills}**`, true)
                    .addField("`Deaths`", `**${deaths}**`, true)
                    .addField("`Win/Loss`", `**${wlr}**`, true)
                    .addField("`Wins`", `**${wins}**`, true)
                    .addField("`Losses`", `**${loss}**`, true)
                    .addField("`Time Played`", `**${timep} Hrs**`, true)
                    .addField("`Fastest Win`", `**${fastwin} Min**`, true)
                    .addField("`Gathered Souls`", `**${gatheredsouls}**`, true)
                    .addField("`Coins`", `**${coins}**`, true)
                    .addField("`Heads`", `**${heads}**`, true)
                    .addField("`Assists`", `**${assits}**`, true)
                    .addField("`Level`", `**${level}**`, true)
                    .addField("`Winstreak`", `**${winstreak}**`, true)
                    .addField("`Guild`", `[**${nnguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                    .setImage(`${skin}`, true)
                    .setTimestamp('')
                    .setFooter(footer, footp)
                    const mmEmbed = message.reply({embed: pbembed}).then(msg => {
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
                        })
                    })
          });
      });
  }
}