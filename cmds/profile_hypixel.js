module.exports = {
  name: "profile",
  description: "profile",
  execute(message, args) {
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const {
      token
    } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";
    let fullCommand = message.content.substr(7);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let username = splitCommand.slice(1);
    if (message.member.roles.cache.some(r => ["Verified"].includes(r.name))) {
      if (message === "undefined") {
        let username = "0";
      }
    }
    console.log(primaryCommand);
    const user = username;
    console.log(user);
    const api = `https://api.mojang.com/users/profiles/minecraft/${user}`;
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
            var version = player["player"]["mcVersionRp"];
            if (typeof version === "undefined") {
              var version = "N/A";
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

            var skin = `https://visage.surgeplay.com/full/${id}?'+Math.random()'`;
              
            if (lastlogin > lastlogout) {
              let lastl = "Online";

              var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;
              fetch(guildname, { cache: "no-cache" })
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
                        var nguild = guilds["guild"]["name"];
                      } catch {
                        var nguild = "None";
                      }

                      const profiles = new Discord.MessageEmbed()

                        .setColor("#00FF00")
                        .setTitle("**Profile**")
                        .setThumbnail(
                          "https://hypixel.net/styles/hypixel-v2/images/logo-64.png"
                        )
                        .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
                        .addField("`Network`", `**${network}**`, true)
                        .addField("`Friends`", `**${friend}**`, true)
                        .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Klls`", `**${kills}**`, true)
                        .addField("`Coins`", `**${coins}**`, true)
                        .addField("`Karma`", `**${karma}**`, true)
                        .addField("`Achievements`", `**${achievement}**`, true)
                        .addField("`Language`", `**${language}**`, true)
                        .addField("`Version`", `**${version}**`, true)
                        .addField("`Join Date`", `**${convdataTime}**`, true)
                        .addField(
                          "`NameMC`",
                          `[**${dname}**](https://namemc.com/profile/${dname})`,
                          true
                        )
                        .setImage(`${skin}`, true)
                        .setTimestamp("")
                        .setFooter(
                          `${dname}'s ${lastl} | Playing ${gamemode}!`,
                          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png"
                        );

                      message.channel.send(profiles);
                    });
                });
            } else {
              let lastl = "Offline";

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
                        var nguild = guilds["guild"]["name"];
                      } catch {
                        var nguild = "None";
                      }

                      const profiles = new Discord.MessageEmbed()
                        .setColor("#b22121")
                        .setThumbnail(
                          "https://hypixel.net/styles/hypixel-v2/images/logo-64.png"
                        )
                        .setTitle("**Profile**")
                        .addField(
                          "`Player`",
                          `[**${drank} ${dname}**](https://hypixel.net/player/${username})`
                        )
                        .addField("`Network`", `**${network}**`, true)
                        .addField("`Friends`", `**${friend}**`, true)
                        .addField(
                          "`Guild`",
                          `[**${nguild}**](https://hypixel.net/guilds/${guildn}/)`,
                          true
                        )
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Kills`", `**${kills}**`, true)
                        .addField("`Coins`", `**${coins}**`, true)
                        .addField("`Karma`", `**${karma}**`, true)
                        .addField("`Achievements`", `**${achievement}**`, true)
                        .addField("`Language`", `**${language}**`, true)
                        .addField("`Version`", `**${version}**`, true)
                        .addField("`Join Date`", `**${convdataTime}**`, true)
                        .addField(
                          "`NameMC`",
                          `[**${dname}**](https://namemc.com/profile/${dname})`,
                          true
                        )
                        .setImage(`${skin}`, true)
                        .setTimestamp("")
                        .setFooter(
                          `${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png"
                        );

                      message.channel.send(profiles);
                    });
                });
            }
          });
      });
  }
};
