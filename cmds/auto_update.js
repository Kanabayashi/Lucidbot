module.exports = {
  name: "auto_update",
  description: "update",
  execute(message, key) {
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    var nickname2 = message.member.displayName;
    let splitcommand = nickname2.split(" ");
    const username = splitcommand.slice(1)
try{
const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
fetch(api)
      .catch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        const id = data.id;
        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch()
          .then(response => {
            return response.json();
          })
          
          .then(player => {
            var star = player["player"]["achievements"]["bedwars_level"]
            var fdeath =
              player["player"]["stats"]["Bedwars"]["final_deaths_bedwars"];
            var fkill =
              player["player"]["stats"]["Bedwars"]["final_kills_bedwars"];
            var x = fkill;
            var y = fdeath;
            var z = x / y;
            var fkdrdeci = z;
            var fkdr = fkdrdeci.toFixed(2);
            var fkdr2 = fkdrdeci.toFixed(2);
            var loss = player["player"]["stats"]["Bedwars"]["losses_bedwars"];
            var wins = player["player"]["stats"]["Bedwars"]["wins_bedwars"];
            var a = wins;
            var b = loss;
            var c = a / b;
            var wlrdeci = c;
            var wlr = wlrdeci.toFixed(2);
            var discord1 = message.member.user.tag.toLowerCase();
            var discord2 = player["player"]["socialMedia"]["links"]["DISCORD"].toLowerCase();
        
            if (discord2 == null) { message.channel.send(`Make sure your Discord is linked on Hypixel!`);
            }
            var dname = player["player"]["displayname"];

            if (discord2 === "undefined") {
              message.channel.send(
                `oops! something went wrong, Make sure you have your Discord linked on Hypixel!`
              );
            }
          
            if (discord1 === discord2) {
            const member = message.guild.member(message.author);
            let vrole = message.guild.roles.cache.find(role => role.name === "Verified");
            let urole = message.guild.roles.cache.find(role => role.name === "Unverified");
            member.roles.add(vrole.id);
              member.roles.remove(urole.id); 

              var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;
              fetch(guildname)
              .catch()
                .then(response => {
                  return response.json();
                })
                .then(guild => {
                  var guildn = guild["guild"];
                  try {
                    if (guildn === "5bb8828e0cf2d46f5a5c5bbc") {
                      let member = message.guild.member(message.author);
                      let gmember = message.guild.roles.cache.find(
                        role => role.name === "[»] Guild Member"
                      );
                      member.roles.add(gmember.id);
                    } else {
                      let member = message.guild.member(message.author);
                      let gmember = message.guild.roles.cache.find(
                        role => role.name === "[»] Guild Member"
                      );
                      member.roles.remove(gmember.id);
                    } 
                  } catch {}
                });
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
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 0-1 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 3 && fkdr <= 5) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 1-3 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 5 && fkdr <= 7) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 5-7 FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 7 && fkdr <= 10) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 7-10 FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 5-7 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 10 && fkdr <= 15) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 7-10 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 15 && fkdr <= 20) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 15-20 FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 FKDR"
                );
                member.roles.remove(urole.id);
                member.roles.add(fkdr.id);
              }
              if (fkdr >= 20 && fkdr <= 1000) {
                let member = message.guild.member(message.author);
                let fkdr = message.guild.roles.cache.find(
                  role => role.name === "| 20+ FKDR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 15-20 FKDR"
                );
                member.roles.remove(urole.id);
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
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 0-1 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 2 && wlr <= 3) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 2-3 WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 1-2 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 3 && wlr <= 5) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 2-3 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 5 && wlr <= 8) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 5-8 WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 3-5 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 8 && wlr <= 10) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 8-10 WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 5-8 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 10 && wlr <= 15) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 8-10 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
              if (wlr >= 15 && wlr <= 1000) {
                let member = message.guild.member(message.author);
                let wlr = message.guild.roles.cache.find(
                  role => role.name === "| 15+ WLR"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "| 10-15 WLR"
                );
                member.roles.remove(urole.id);
                member.roles.add(wlr.id);
              }
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
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Stone Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 200 && star <= 299) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Gold Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Iron Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 300 && star <= 399) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Diamond Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Gold Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 400 && star <= 499) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Emerald Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Diamond Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 500 && star <= 599) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Sapphire Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Emerald Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 600 && star <= 699) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Ruby Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Sapphire Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 700 && star <= 799) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Crystal Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Ruby Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 800 && star <= 899) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Opal Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Crystal Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 900 && star <= 999) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Amethyst Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Opal Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (star >= 1000 && star <= 9999) {
                let member = message.guild.member(message.author);
                let prestige = message.guild.roles.cache.find(
                  role => role.name === "[»] Rainbow Prestige"
                );
                let urole = message.guild.roles.cache.find(
                  role => role.name === "[»] Amethyst Prestige"
                );
                member.roles.remove(urole.id);
                member.roles.add(prestige.id);
                member.setNickname(`[${star}✫] ${dname}`);
              }
        let d2args = player["player"]["newPackageRank"];
  	switch (d2args) {
		case "VIP":
   			        var drank = message.guild.roles.cache.find(role => role.name === "VIP")
                                member.roles.add(drank.id)
    		break;
		case "VIP_PLUS":
   			        var drank = message.guild.roles.cache.find(role => role.name === "VIP+")
                                var urank = message.guild.roles.cache.find(role => role.name === "VIP")
                                member.roles.add(drank.id)
                                member.roles.remove(urank.id)
    		break;
		case "MVP":
   			        var drank = message.guild.roles.cache.find(role => role.name === "MVP")
                                var urank = message.guild.roles.cache.find(role => role.name === "VIP+")
                                member.roles.add(drank.id)
                                member.roles.remove(urank.id)  
    		break;	
		case "MVP_PLUS":
   			        var drank = message.guild.roles.cache.find(role => role.name === "MVP+")
                	        var urank = message.guild.roles.cache.find(role => role.name === "MVP")
                                var brole = message.guild.roles.cache.find(role => role.name === "MVP++")
                                member.roles.add(drank.id)
                                member.roles.remove(urank.id)
                                member.roles.remove(brole.id)
                break;	
	}
        let mpack = player["player"]["monthlyPackageRank"];
  	switch (mpack) {
		case "SUPERSTAR":
   			        var drank = message.guild.roles.cache.find(role => role.name === "MVP++")
                	        var urank = message.guild.roles.cache.find(role => role.name === "MVP+")
                                member.roles.add(drank.id)
                                member.roles.remove(urank.id)
    		break;		
	}
            } else {
            }
          });
      });
      } catch {return};
  }
};
