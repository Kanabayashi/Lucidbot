module.exports = {
  name: "murder_mystery",
  description: "murder mystery statistics",
  execute(message, args) {
    
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const { token } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";
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
            var joindate = player["player"]["firstLogin"];
            var months_arr = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];
            var date = new Date(joindate);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = month + "/" + day + "/" + year + ``;
            var lastlogout2 = player["player"]["lastLogout"];
            var lmonths_arr = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];
            var ldate = new Date(lastlogout2);
            var lyear = ldate.getFullYear();
            var lmonth = lmonths_arr[ldate.getMonth()];
            var lday = ldate.getDate();
            var lastlogout2 = lmonth + "/" + lday + "/" + lyear + ``;
            var dname = player["player"]["displayname"];
            var version = player["player"]["mcVersionRp"];
            if (typeof version === "undefined") {var version = "N/A"};
            var coins = player["player"]["stats"]["MurderMystery"]["coins"];
            var mchance = player["player"]["stats"]["MurderMystery"]["murderer_chance"];
            var dchance = player["player"]["stats"]["MurderMystery"]["detective_chance"];    
            var inchance = (mchance + dchance);
            var ichance = (100 - inchance);
            var mm_chests = player["player"]["stats"]["MurderMystery"]["mm_chests"];
            var games = player["player"]["stats"]["MurderMystery"]["games"];
            var wins = player["player"]["stats"]["MurderMystery"]["wins"];
            var loss = (games - wins);
            var kills = player["player"]["stats"]["MurderMystery"]["kills"];
            var deaths = player["player"]["stats"]["MurderMystery"]["deaths"];
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

            var drank = player["player"]["newPackageRank"];

            if (drank === "VIP_PLUS") {
              var rankd = drank.slice(0, -5);
              var drank = `[${rankd}+]`;
            }
            if (drank === "MVP_PLUS") {
              var rankd = drank.slice(0, -5);
              var drank = `[${rankd}+]`;
            }
            if (drank === "VIP") {
              var drank = `[VIP]`;
            }
            if (drank === "MVP") {
              var drank = `[MVP]`;
            }
            if (typeof drank === "undefined") {
              var drank = " ";
            }
            if (typeof drank === "NONE") {
              var drank = " ";
            }
            try {
              var mrank = player["player"]["monthlyPackageRank"];
              if (mrank === "SUPERSTAR") {
                var drank = `[MVP++]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "YOUTUBER") {
                var drank = `[Youtuber]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "HELPER") {
                var drank = `[Helper]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "MOD") {
                var drank = `[Mod]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "ADMIN") {
                var drank = `[Admin]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "OWNER") {
                var drank = `[Owner]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["prefix"];
              if (mrank === "§3[BUILD TEAM]") {
                var drank = `[Build Team]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["prefix"];
              if (mrank === "§d[PIG§b+++§d]") {
                var drank = `[PIG+++]`;
              }
            } catch {
              return;
            }
            try {
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var kills = formatNumber(kills);
            var deaths = formatNumber(deaths);
            var wins = formatNumber(wins);
            var loss = formatNumber(loss);
            var coins = formatNumber(coins);
            var kdr = formatNumber(kdr);
            var wlr = formatNumber(wlr);
            var mm_chests = formatNumber(mm_chests);
            } catch {}

            var skin = `https://visage.surgeplay.com/full/${id}?'+Math.random()'`;

            if (lastlogin > lastlogout) {
               let lastl = ('Online')
                                
            var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`
                fetch(guildname)
              .then(response => {
                return response.json();
                })
              .then(guild => {
                var guildn = guild['guild']
                  
                var guildstats = `https://api.hypixel.net/guild?key=${key}&id=${guildn}`
                    fetch(guildstats)
                .then(response => {
                    return response.json();
                })
                .then(guilds => {
                  try { var nguild = guilds['guild']['name'] } catch {var nguild = "None"}
                                    
                    const mmembed = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle('**Murder Mystery**')
                    .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/MurderMystery-64.png')
                    .addField("`Player`", `[**${drank} ${dname}**](https://plancke.io/hypixel/player/stats/${username})`)
                    .addField("`Murder Chance`", `**${mchance}%**`, true)
                    .addField("`Detective Chance`", `**${dchance}%**`, true)
                    .addField("`Innocent Chance`", `**${ichance}%**`, true)
                    .addField("`KDR`", `**${kdr}**`, true)
                    .addField("`Kills`", `**${kills}**`, true)
                    .addField("`Deaths`", `**${deaths}**`, true)
                    .addField("`Win/Loss`", `**${wlr}**`, true)
                    .addField("`Wins`", `**${wins}**`, true)
                    .addField("`Losses`", `**${loss}**`, true)
                    .addField("`Coins`", `**${coins}**`, true)
                    .addField("`Loot Chests`", `**${mm_chests}**`, true)
                    .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                    .setImage(`${skin}`, true)
                    .setTimestamp('')
                    .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`, 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png' )
                    message.channel.send(mmembed)
                            })
                        })
                    } else {
                      let lastl = ('Offline')
                                    
                                    
                  var guildname = (`https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`)
                      fetch(guildname)
                  .then(response => {
                      return response.json();
                        })
                  .then(guild => {
                        var guildn = guild['guild']

                    var guildstats = (`https://api.hypixel.net/guild?key=${key}&id=${guildn}`)
                        fetch(guildstats)
                    .then(response => {
                        return response.json();
                      })
                    .then(guilds => {
                try { var nguild = guilds['guild']['name'] } catch { var nguild = "None" }
                                
                  const mmembed = new Discord.MessageEmbed()
                    .setColor('#b22121')
                    .setTitle('**Murder Mystery**')
                    .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/MurderMystery-64.png')
                    .addField("`Player`", `[**${drank} ${dname}**](https://plancke.io/hypixel/player/stats/${username})`)
                    .addField("`Murder Chance`", `**${mchance}%**`, true)
                    .addField("`Detective Chance`", `**${dchance}%**`, true)
                    .addField("`Innocent Chance`", `**${ichance}%**`, true)
                    .addField("`KDR`", `**${kdr}**`, true)
                    .addField("`Kills`", `**${kills}**`, true)
                    .addField("`Deaths`", `**${deaths}**`, true)
                    .addField("`Win/Loss`", `**${wlr}**`, true)
                    .addField("`Wins`", `**${wins}**`, true)
                    .addField("`Losses`", `**${loss}**`, true)
                    .addField("`Coins`", `**${coins}**`, true)
                    .addField("`Loot Chests`", `**${mm_chests}**`, true)
                    .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                    .setImage(`${skin}`, true)
                    .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! | ${version}`, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png'  )
                    message.channel.send(mmembed)
                            })
                        })
                    }
          });
      });
  }
}