 module.exports = {
  name: "auto_update",
  description: "update",
  execute(message, args) {
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const {
      token
    } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";
    var nickname2 = message.member.displayName;
    let splitcommand = nickname2.split(" ");
    const username = splitcommand.slice(1)
    try {
    const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
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
            try {
            var star = player["player"]["achievements"]["bedwars_level"]
            } catch {}
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
                      member.roles.add(gmember.id).catch();
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
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Chat Mod"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Mod"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Admin"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Manager"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Owner"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Trial Staff"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Guild Staff"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Officials"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Content Creator"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
              if (
                message.member.roles.cache.some(r =>
                  ["[»] Partner"].includes(r.name)
                )
              ) {
                member.setNickname(`[${star}✫] ${dname}`);
              }
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
                let urole = message.guild.roles.cache.find(
                  role => role.name === "VIP"
                );
                member.roles.remove(urole.id);
                member.roles.add(drank.id);
              }
              if (drank === "MVP") {
                let drank = message.guild.roles.cache.find(
                  role => role.name === "MVP"
                );
                let member = message.guild.member(message.author);
                let urole = message.guild.roles.cache.find(
                  role => role.name === "VIP+"
                );
                member.roles.remove(urole.id);
                member.roles.add(drank.id);
              }

              if (drank === "MVP_PLUS") {
                let drank = message.guild.roles.cache.find(
                  role => role.name === "MVP+"
                );
                let member = message.guild.member(message.author);
                let urole = message.guild.roles.cache.find(
                  role => role.name === "MVP"
                );
                let erole = message.guild.roles.cache.find(
                  role => role.name === "MVP++"
                );
                if (mrank === false) {
                  member.roles.remove(erole.id);
                }
                member.roles.remove(urole.id);
                member.roles.add(drank.id);
              }
              try {
                var mrank = player["player"]["monthlyPackageRank"];
                if (mrank === "SUPERSTAR") {
                  let mrank = message.guild.roles.cache.find(
                    role => role.name === "MVP++"
                  );
                  let drank = message.guild.roles.cache.find(
                    role => role.name === "MVP+"
                  );
                  let member = message.guild.member(message.author);
                  member.roles.remove(drank.id);
                  member.roles.add(mrank.id);
                }
              } catch {
                member.roles.remove(drank.id);
              }
              
            } else {
              message.author.send(
                `**Your linked discord**: __${discord2}__  **& Your discord:** __${discord1}__ **do not match!**`
              );
            }
          });
      });
    } catch { return }
  }
};
