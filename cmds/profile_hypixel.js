module.exports = {
  name: "profile",
  description: "profile",
  execute(message, key) {
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    let fullcommand = message.content.substr(7);
    let splitcommand = fullcommand.split(" ");
    let username = splitcommand.slice(1);
    const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;

        const hypixel = `https://api.sk1er.club/player/${id}`;
        fetch(hypixel)
          .then(response => {
            return response.json();
          })
          .then(player => {
            if (player["player"]["displayname"] === "undefined") {
              message.channel.send(`${user} has never joined Hypixel.`);
            }
            var joindate = player["player"]["firstLogin"];
            var months_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var date = new Date(joindate);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = month + "/" + day + "/" + year + ``;
            var lastlogout2 = player["player"]["lastLogout"];
            var ldate = new Date(lastlogout2);
            var lyear = ldate.getFullYear();
            var lmonth = months_arr[ldate.getMonth()];
            var lday = ldate.getDate();
            var lastlogout2 = lmonth + "/" + lday + "/" + lyear + ``;
            var language = player["player"]["userLanguage"];
            if (typeof language === "undefined") {
              var language = "ENGLISH";
            }
            var friend = player["player"]["friends"];
            var network = player["player"]["networkLevel"];
            var achievement = player["player"]["achievementPoints"];
            var dname = player["player"]["displayname"];
            var karma = player["player"]["karma"];
            var coins = player["player"]["coins"];
            var kills = player["player"]["kills"];
            var wins = player["player"]["wins"];
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
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
        console.log(drank)
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var karma = formatNumber(karma);
            var kills = formatNumber(kills);
            var wins = formatNumber(wins);
            var coins = formatNumber(coins);
            var friend = formatNumber(friend);
            var achievement = formatNumber(achievement);

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
                        .setTitle("**Profile**")
                        .setThumbnail("https://hypixel.net/styles/hypixel-v2/images/logo-64.png")
                        .addField("`Player`", `[**${drank} ${dname} ${guildt}**](https://plancke.io/hypixel/player/stats/${username})`)
                        .addField("`Network`", `**${network}**`, true)
                        .addField("`Friends`", `**${friend}**`, true)
                        .addField("`Guild`", `[**${nnguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Klls`", `**${kills}**`, true)
                        .addField("`Coins`", `**${coins}**`, true)
                        .addField("`Karma`", `**${karma}**`, true)
                        .addField("`Achievements`", `**${achievement}**`, true)
                        .addField("`Language`", `**${language}**`, true)
                        .addField("`Version`", `**${vers}**`, true)
                        .addField("`Join Date`", `**${convdataTime}**`, true)
                        .addField("`NameMC`",`[**${dname}**](https://namemc.com/profile/${dname})`, true)
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
