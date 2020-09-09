module.exports = {
  name: "v",
  description: "Verification",
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
    var discord1 = message.member.user.tag.toLowerCase();
    
    const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
      .catch(message.delete({ timeout: 1000 }))
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;

        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch(message.delete({ timeout: 1000 }))
          .then(response => {
            return response.json();
          })

          .then(player => {
            var dname = player["player"]["displayname"];
            var star = player["player"]["achievements"]["bedwars_level"];
            var version = player["player"]["mcVersionRp"];
            if (typeof version === "undefined") {
              var version = "N/A";
            }
            var fdeath =
              player["player"]["stats"]["Bedwars"]["final_deaths_bedwars"];
            if (fdeath == null) {
              var fdeath = "0";
            }
            var fkill =
              player["player"]["stats"]["Bedwars"]["final_kills_bedwars"];
            var x = fkill;
            var y = fdeath;
            if (y == 0) {
              var y = 1;
            }
            var z = x / y;
            var fkdrdeci = z;
            var fkdr = fkdrdeci.toFixed(2);
            var kills = player["player"]["stats"]["Bedwars"]["kills_bedwars"];
            var deaths = player["player"]["stats"]["Bedwars"]["deaths_bedwars"];
            var b = kills;
            var c = deaths;
            var d = b / c;
            var kdrdeci = d;
            var kdr = kdrdeci.toFixed(2);
            var loss = player["player"]["stats"]["Bedwars"]["losses_bedwars"];
            var wins = player["player"]["stats"]["Bedwars"]["wins_bedwars"];
            var a = wins;
            var b = loss;
            if (b == null) {
              var b = 1;
            }
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
            var date = new Date();
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var time =
              day +
              " " +
              month +
              " " +
              year +
              " " +
              hour +
              ":" +
              min +
              ":" +
              sec;
            var c = a / b;
            var wlrdeci = c;
            var wlr = wlrdeci.toFixed(2);
            var winstreak = player["player"]["stats"]["Bedwars"]["winstreak"];
            var played =
              player["player"]["stats"]["Bedwars"]["games_played_bedwars"];
            var g = played;
            var h = x / g;
            var fpg = h.toFixed(2);
            var l = kills;
            var k = l / g;
            var avgk = k.toFixed(2);
            var bedb =
              player["player"]["stats"]["Bedwars"]["beds_broken_bedwars"];
            var bedl =
              player["player"]["stats"]["Bedwars"]["beds_lost_bedwars"];
            var e = bedb / bedl;
            var avgb1 = bedb / played;
            var avgb = avgb1.toFixed(2);
            var bedratio = e.toFixed(2);
            var gamemode = player["player"]["mostRecentGameType"];
            if (typeof gamemode === "undefined") {
              var gamemode = "Limbo";
            }
            var discord2 = player["player"]["socialMedia"]["links"][
              "DISCORD"
            ].toLowerCase();

            if (discord1 === discord2) {
              const member = message.guild.member(message.author);
              let vrole = message.guild.roles.cache.find(
                role => role.name === "Verified"
              );
              let urole = message.guild.roles.cache.find(
                role => role.name === "Unverified"
              );
              member.roles.add(vrole.id);
              member.roles.remove(urole.id);
              const verifymessage = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .addField("**Congratulations!**", `You have been verifed on the **${message.guild}** Discord.`, true)
                .setTimestamp(`${time}`)
                .setFooter(`Kensho v2.4.0 | Created by Kanabayashi#0931 & Bluq#2277`);       
                message.author.send(verifymessage)
           

              var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;

              fetch(guildname)
                .then(response => {
                  return response.json();
                })
                .then(guild => {
                  var guildn = guild["guild"];

                  if (guildn === "5bb8828e0cf2d46f5a5c5bbc") {
                    let member = message.guild.member(message.author);
                    let gmember = message.guild.roles.cache.find(
                      role => role.name === "[»] Guild Member"
                    );
                    member.roles.add(gmember.id);
                  } else {
                    return;
                  }
                });

              if (star >= 0 && star <= 99) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Stone Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 100 && star <= 199) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Iron Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 200 && star <= 299) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Gold Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 300 && star <= 399) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Diamond Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 400 && star <= 499) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Emerald Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 500 && star <= 599) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Sapphire Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 600 && star <= 699) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Ruby Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 700 && star <= 799) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Crystal Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 800 && star <= 899) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Opal Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 900 && star <= 999) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Amethyst Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 1000 && star <= 9999) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Rainbow Prestige"
                );
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (fkdr >= 0 && fkdr <= 1) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 0-1 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 1 && fkdr <= 3) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 1-3 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 3 && fkdr <= 5) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 5 && fkdr <= 7) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 5-7 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 7 && fkdr <= 10) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 7-10 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 10 && fkdr <= 15) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 15 && fkdr <= 20) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 15-20 FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 20 && fkdr <= 1000) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 20+ FKDR"
                );
                member.roles.add(fkdr.id);
              }
              if (wlr >= 0 && wlr <= 1) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 0-1 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 1 && wlr <= 2) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 1-2 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 2 && wlr <= 3) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 2-3 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 3 && wlr <= 5) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 5 && wlr <= 8) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 5-8 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 8 && wlr <= 10) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 8-10 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 10 && wlr <= 15) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 WLR"
                );
                member.roles.add(wlr.id);
              }
              if (wlr >= 15 && wlr <= 1000) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 15+ WLR"
                );
                member.roles.add(wlr.id);
              }
              try {
                var mrank = player["player"]["monthlyPackageRank"];
                if (mrank === "SUPERSTAR") {
                  let mrank = message.guild.roles.cache.find(
                    role => role.name === "MVP++"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.add(mrank.id);
                }
              } catch {
                return;
              }
              try {
                var drank = player["player"]["newPackageRank"];
                if (drank === "VIP") {
                  let drank = message.guild.roles.cache.find(
                    role => role.name === "VIP"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.add(drank.id);
                }
                if (drank === "VIP_PLUS") {
                  let drank = message.guild.roles.cache.find(
                    role => role.name === "VIP+"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.add(drank.id);
                }
                if (drank === "MVP") {
                  let drank = message.guild.roles.cache.find(
                    role => role.name === "MVP"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.add(drank.id);
                }
                if (drank === "MVP_PLUS") {
                  let drank = message.guild.roles.cache.find(
                    role => role.name === "MVP+"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.add(drank.id);
                }
              } catch {
               message.author.send(`**Your linked discord**: __${discord2}__  **& Your discord:** __${discord1}__ **do not match!**`)
              }
              

            }
          });
      });
  }
};
