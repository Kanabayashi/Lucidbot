module.exports = {
  name: "bedwars",
  description: "Bedwars Statistics",
  execute(message, args) {
    const Discord = require("discord.js");
    const EmbedBuilder = require('discord-embedbuilder');
    const client = new Discord.Client();
    const {
      token
    } = "NjYxNzM4MDI3MTE4MzYyNjQ0.XgvxkA.rEcKH4YDWdJReHe4zFlDkroz23o";
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
            var star = player["player"]["achievements"]["bedwars_level"];
            var version = player["player"]["mcVersionRp"];
            if (typeof version === "undefined") {
              var version = "N/A";
            }
            //all modes stats
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
            var loss = player["player"]["stats"]["Bedwars"]["losses_bedwars"];
            var wins = player["player"]["stats"]["Bedwars"]["wins_bedwars"];
            var kills = player["player"]["stats"]["Bedwars"]["kills_bedwars"];
            var deaths = player["player"]["stats"]["Bedwars"]["deaths_bedwars"];
            var b = kills;
            var c = deaths;
            var d = b / c;
            var kdrdeci = d;
            var kdr = kdrdeci.toFixed(2);
            var a = wins;
            var b = loss;
            if (loss == null) {
              var b = 1;
            }
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
            //solo stats
            var solo_fdeath = player['player']['stats']['Bedwars']['eight_one_final_deaths_bedwars']
            if (solo_fdeath == null) {
            var solo_fdeath = "0"
            }  
            var solo_fkill = player['player']['stats']['Bedwars']['eight_one_final_kills_bedwars']
            var solo_x = (solo_fkill);
            var solo_y = (solo_fdeath);
            if (solo_y == 0) {
            var solo_y = 1
            }
            var solo_z = solo_x / solo_y;
            var solo_fkdrdeci = solo_z;
            var solo_fkdr = (solo_fkdrdeci).toFixed(2);
            var solo_loss = player['player']['stats']['Bedwars']['eight_one_losses_bedwars']
            var solo_wins = player['player']['stats']['Bedwars']['eight_one_wins_bedwars']
            var solo_kills = player['player']['stats']['Bedwars']['eight_one_kills_bedwars']
            var solo_deaths = player['player']['stats']['Bedwars']['eight_one_deaths_bedwars']
            var solo_b = (solo_kills);
            var solo_c = (solo_deaths);
            var solo_d = solo_b / solo_c;
            var solo_kdrdeci = solo_d;
            var solo_kdr = (solo_kdrdeci).toFixed(2);
            var solo_a = (solo_wins);
            var solo_b = (solo_loss);
            if (solo_loss == null) {
            var solo_b = 1
            }
            var solo_c = solo_a / solo_b;
            var solo_wlrdeci = solo_c;
            var solo_wlr = (solo_wlrdeci).toFixed(2);
            var solo_winstreak = player['player']['stats']['Bedwars']['eight_one_winstreak']
            var solo_played = player['player']['stats']['Bedwars']['eight_one_games_played_bedwars']
            var solo_g = (solo_played)
            var solo_h = solo_x / solo_g
            var solo_fpg = (solo_h).toFixed(2);
            var solo_l = (solo_kills)
            var solo_k = solo_l / solo_g
            var solo_avgk = (solo_k).toFixed(2);
            var solo_bedb = player['player']['stats']['Bedwars']['eight_one_beds_broken_bedwars']
            var solo_bedl = player['player']['stats']['Bedwars']['eight_one_beds_lost_bedwars']
            var solo_e = solo_bedb / solo_bedl
            var solo_avgb1 = solo_bedb / solo_played
            var solo_avgb = (solo_avgb1).toFixed(2);
            var solo_bedratio = (solo_e).toFixed(2);
            //double stats
            var doub_fdeath = player['player']['stats']['Bedwars']['eight_two_final_deaths_bedwars']
            if (doub_fdeath == null) {
            var doub_fdeath = "0"
            }  
            var doub_fkill = player['player']['stats']['Bedwars']['eight_two_final_kills_bedwars']
            var doub_x = (doub_fkill);
            var doub_y = (doub_fdeath);
            if (doub_y == 0) {
            var doub_y = 1
            }
            var doub_z = doub_x / doub_y;
            var doub_fkdrdeci = doub_z;
            var doub_fkdr = (doub_fkdrdeci).toFixed(2);
            var doub_loss = player['player']['stats']['Bedwars']['eight_two_losses_bedwars']
            var doub_wins = player['player']['stats']['Bedwars']['eight_two_wins_bedwars']
            var doub_kills = player['player']['stats']['Bedwars']['eight_two_kills_bedwars']
            var doub_deaths = player['player']['stats']['Bedwars']['eight_two_deaths_bedwars']
            var doub_b = (doub_kills);
            var doub_c = (doub_deaths);
            var doub_d = doub_b / doub_c;
            var doub_kdrdeci = doub_d;
            var doub_kdr = (doub_kdrdeci).toFixed(2);
            var doub_a = (doub_wins);
            var doub_b = (doub_loss);
            if (doub_loss == null) {
            var doub_b = 1
            }
            var doub_c = doub_a / doub_b;
            var doub_wlrdeci = doub_c;
            var doub_wlr = (doub_wlrdeci).toFixed(2);
            var doub_winstreak = player['player']['stats']['Bedwars']['eight_two_winstreak']
            var doub_played = player['player']['stats']['Bedwars']['eight_two_games_played_bedwars']
            var doub_g = (doub_played)
            var doub_h = doub_x / doub_g
            var doub_fpg = (doub_h).toFixed(2);
            var doub_l = (doub_kills)
            var doub_k = doub_l / doub_g
            var doub_avgk = (doub_k).toFixed(2);
            var doub_bedb = player['player']['stats']['Bedwars']['eight_two_beds_broken_bedwars']
            var doub_bedl = player['player']['stats']['Bedwars']['eight_two_beds_lost_bedwars']
            var doub_e = doub_bedb / doub_bedl
            var doub_avgb1 = doub_bedb / doub_played
            var doub_avgb = (doub_avgb1).toFixed(2);
            var doub_bedratio = (doub_e).toFixed(2);
            //trio stats
            var trio_fdeath = player['player']['stats']['Bedwars']['four_three_final_deaths_bedwars']
            if (trio_fdeath == null) {
            var trio_fdeath = "0"
            }  
            var trio_fkill = player['player']['stats']['Bedwars']['four_three_final_kills_bedwars']
            var trio_x = (trio_fkill);
            var trio_y = (trio_fdeath);
            if (trio_y == 0) {
            var trio_y = 1
            }
            var trio_z = trio_x / trio_y;
            var trio_fkdrdeci = trio_z;
            var trio_fkdr = (trio_fkdrdeci).toFixed(2);
            var trio_loss = player['player']['stats']['Bedwars']['four_three_losses_bedwars']
            var trio_wins = player['player']['stats']['Bedwars']['four_three_wins_bedwars']
            var trio_kills = player['player']['stats']['Bedwars']['four_three_kills_bedwars']
            var trio_deaths = player['player']['stats']['Bedwars']['four_three_deaths_bedwars']
            var trio_b = (trio_kills);
            var trio_c = (trio_deaths);
            var trio_d = trio_b / trio_c;
            var trio_kdrdeci = trio_d;
            var trio_kdr = (trio_kdrdeci).toFixed(2);
            var trio_a = (trio_wins);
            var trio_b = (trio_loss);
            if (trio_loss == null) {
            var trio_b = 1
            }
            var trio_c = trio_a / trio_b;
            var trio_wlrdeci = trio_c;
            var trio_wlr = (trio_wlrdeci).toFixed(2);
            var trio_winstreak = player['player']['stats']['Bedwars']['four_three_winstreak']
            var trio_played = player['player']['stats']['Bedwars']['four_three_games_played_bedwars']
            var trio_g = (trio_played)
            var trio_h = trio_x / trio_g
            var trio_fpg = (trio_h).toFixed(2);
            var trio_l = (trio_kills)
            var trio_k = trio_l / trio_g
            var trio_avgk = (trio_k).toFixed(2);
            var trio_bedb = player['player']['stats']['Bedwars']['four_three_beds_broken_bedwars']
            var trio_bedl = player['player']['stats']['Bedwars']['four_three_beds_lost_bedwars']
            var trio_e = trio_bedb / trio_bedl
            var trio_avgb1 = trio_bedb / trio_played
            var trio_avgb = (trio_avgb1).toFixed(2);
            var trio_bedratio = (trio_e).toFixed(2);
            //fours
            var four_fdeath = player['player']['stats']['Bedwars']['four_four_final_deaths_bedwars']
            if (four_fdeath == null) {
            var four_fdeath = "0"
            }  
            var four_fkill = player['player']['stats']['Bedwars']['four_four_final_kills_bedwars']
            var four_x = (four_fkill);
            var four_y = (four_fdeath);
            if (four_y == 0) {
            var four_y = 1
            }
            var four_z = four_x / four_y;
            var four_fkdrdeci = four_z;
            var four_fkdr = (four_fkdrdeci).toFixed(2);
            var four_loss = player['player']['stats']['Bedwars']['four_four_losses_bedwars']
            var four_wins = player['player']['stats']['Bedwars']['four_four_wins_bedwars']
            var four_kills = player['player']['stats']['Bedwars']['four_four_kills_bedwars']
            var four_deaths = player['player']['stats']['Bedwars']['four_four_deaths_bedwars']
            var four_e = (four_kills);
            var four_c = (four_deaths);
            var four_d = four_e / four_c;
            var four_kdrdeci = four_d;
            var four_kdr = (four_kdrdeci).toFixed(2);
            var four_a = (four_wins);
            var four_b = (four_loss);
            if (four_loss == null) {
            var four_b = 1
            }
            var four_c = four_a / four_b;
            var four_wlrdeci = four_c;
            var four_wlr = (four_wlrdeci).toFixed(2);
            var four_winstreak = player['player']['stats']['Bedwars']['four_four_winstreak']
            var four_played = player['player']['stats']['Bedwars']['four_four_games_played_bedwars']
            var four_g = (four_played)
            var four_h = four_x / four_g
            var four_fpg = (four_h).toFixed(2);
            var four_l = (four_kills)
            var four_k = four_l / four_g
            var four_avgk = (four_k).toFixed(2);
            var four_bedb = player['player']['stats']['Bedwars']['four_four_beds_broken_bedwars']
            var four_bedl = player['player']['stats']['Bedwars']['four_four_beds_lost_bedwars']
            var four_e = four_bedb / four_bedl
            var four_avgb1 = four_bedb / four_played
            var four_avgb = (four_avgb1).toFixed(2);
            var four_bedratio = (four_e).toFixed(2);
            //4v4
            var v4_fdeath = player['player']['stats']['Bedwars']['two_four_final_deaths_bedwars']
            if (four_fdeath == null) {
            var v4_fdeath = "0"
            }  
            var v4_fkill = player['player']['stats']['Bedwars']['two_four_final_kills_bedwars']
            var v4_x = (v4_fkill);
            var v4_y = (v4_fdeath);
            if (v4_y == 0) {
            var v4_y = 1
            }
            var v4_z = v4_x / v4_y;
            var v4_fkdrdeci = v4_z;
            var v4_fkdr = (v4_fkdrdeci).toFixed(2);
            var v4_loss = player['player']['stats']['Bedwars']['two_four_losses_bedwars']
            var v4_wins = player['player']['stats']['Bedwars']['two_four_wins_bedwars']
            var v4_kills = player['player']['stats']['Bedwars']['two_four_kills_bedwars']
            var v4_deaths = player['player']['stats']['Bedwars']['two_four_deaths_bedwars']
            var v4_b = (v4_kills);
            var v4_c = (v4_deaths);
            var v4_d = v4_b / v4_c;
            var v4_kdrdeci = v4_d;
            var v4_kdr = (v4_kdrdeci).toFixed(2);
            var v4_a = (v4_wins);
            var v4_b = (v4_loss);
            if (v4_loss == null) {
            var v4_b = 1
            }
            var v4_c = v4_a / v4_b;
            var v4_wlrdeci = v4_c;
            var v4_wlr = (v4_wlrdeci).toFixed(2);
            var v4_winstreak = player['player']['stats']['Bedwars']['two_four_winstreak']
            var v4_played = player['player']['stats']['Bedwars']['two_four_games_played_bedwars']
            var v4_g = (v4_played)
            var v4_h = v4_x / v4_g
            var v4_fpg = (v4_h).toFixed(2);
            var v4_l = (v4_kills)
            var v4_k = v4_l / v4_g
            var v4_avgk = (v4_k).toFixed(2);
            var v4_bedb = player['player']['stats']['Bedwars']['two_four_beds_broken_bedwars']
            var v4_bedl = player['player']['stats']['Bedwars']['two_four_beds_lost_bedwars']
            var v4_e = v4_bedb / v4_bedl
            var v4_avgb1 = v4_bedb / v4_played
            var v4_avgb = (v4_avgb1).toFixed(2);
            var v4_bedratio = (v4_e).toFixed(2);
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
            var fkill = formatNumber(fkill);
            var fdeath = formatNumber(fdeath);
            var wins = formatNumber(wins);
            var loss = formatNumber(loss);
            var bedb = formatNumber(bedb);
            var bedl = formatNumber(bedl);
            var kills = formatNumber(kills);
            var deaths = formatNumber(deaths);
            var fkdr = formatNumber(fkdr);
            var wlr = formatNumber(wlr);
            var solo_solo_fkill = formatNumber(solo_fkill);
            var solo_fdeath = formatNumber(solo_fdeath);
            var solo_wins = formatNumber(solo_wins);
            var solo_loss = formatNumber(solo_loss);
            var solo_bedb = formatNumber(solo_bedb);
            var solo_bedl = formatNumber(solo_bedl);
            var solo_kills = formatNumber(solo_kills);
            var solo_deaths = formatNumber(solo_deaths);
            var solo_fkdr = formatNumber(solo_fkdr);
            var solo_wlr = formatNumber(solo_wlr);
            var doub_fkill = formatNumber(doub_fkill);
            var doub_fdeath = formatNumber(doub_fdeath);
            var doub_wins = formatNumber(doub_wins);
            var doub_loss = formatNumber(doub_loss);
            var doub_bedb = formatNumber(doub_bedb);
            var doub_bedl = formatNumber(doub_bedl);
            var doub_kills = formatNumber(doub_kills);
            var doub_deaths = formatNumber(doub_deaths);
            var doub_fkdr = formatNumber(doub_fkdr);
            var doub_wlr = formatNumber(doub_wlr);
            var trio_fkill = formatNumber(trio_fkill);
            var trio_fdeath = formatNumber(trio_fdeath);
            var trio_wins = formatNumber(trio_wins);
            var trio_loss = formatNumber(trio_loss);
            var trio_bedb = formatNumber(trio_bedb);
            var trio_bedl = formatNumber(trio_bedl);
            var trio_kills = formatNumber(trio_kills);
            var trio_deaths = formatNumber(trio_deaths);
            var trio_fkdr = formatNumber(trio_fkdr);
            var trio_wlr = formatNumber(trio_wlr);
            var four_fkill = formatNumber(four_fkill);
            var four_fdeath = formatNumber(four_fdeath);
            var four_wins = formatNumber(four_wins);
            var four_loss = formatNumber(four_loss);
            var four_bedb = formatNumber(four_bedb);
            var four_bedl = formatNumber(four_bedl);
            var four_kills = formatNumber(four_kills);
            var four_deaths = formatNumber(four_deaths);
            var four_fkdr = formatNumber(four_fkdr);
            var four_wlr = formatNumber(four_wlr);
            var v4_fkill = formatNumber(v4_fkill);
            var v4_fdeath = formatNumber(v4_fdeath);
            var v4_wins = formatNumber(v4_wins);
            var v4_loss = formatNumber(v4_loss);
            var v4_bedb = formatNumber(v4_bedb);
            var v4_bedl = formatNumber(v4_bedl);
            var v4_kills = formatNumber(v4_kills);
            var v4_deaths = formatNumber(v4_deaths);
            var v4_fkdr = formatNumber(v4_fkdr);
            var v4_wlr = formatNumber(v4_wlr);
            var star = formatNumber(star);
            } catch {}

            var skin = `https://visage.surgeplay.com/full/${id}?'+Math.random()'`;
            
            //If lastLogin is greater than lastLogout, the user is currently online
            if (lastlogin > lastlogout) {
              let lastl = "Online";

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

                      const bw = new Discord.MessageEmbed()
                        .setColor("#00FF00")
                        .setTitle("**All Modes**")
                        .addField(
                          "`Player`",
                          `[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`
                        )
                        //.setImage(`https://visage.surgeplay.com/full/${id}`, true)
                        .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                        .addField("`Final KDR`", `**${fkdr}**`, true)
                        .addField("`Final Kills`", `**${fkill}**`, true)
                        .addField("`Final Deaths`", `**${fdeath}**`, true)
                        .addField("`Win/Loss`", `**${wlr}**`, true)
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Losses`", `**${loss}**`, true)
                        .addField("`Broken/Loss`", `**${bedratio}**`, true)
                        .addField("`Beds Broken`", `**${bedb}**`, true)
                        .addField("`Beds Lost`", `**${bedl}**`, true)
                        .addField("`KDR`", `**${kdr}**`, true)
                        .addField("`Kills`", `**${kills}**`, true)
                        .addField("`Deaths`", `**${deaths}**`, true)
                        .addField("`Finals/Game`", `**${fpg}**`, true)
                        .addField("`Kills/Game`", `**${avgk}**`, true)
                        .addField("`Beds/Game`", `**${avgb}**`, true)
                        .addField("`Star`", `**${star}**`, true)
                        .addField("`Winstreak`", `**${winstreak}**`, true)
                        .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                        .setImage(`${skin}`, true)
                        .setTimestamp("")
                        .setFooter(
                          `${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
                          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png"
                        );              
    const bwEmbed = message.reply({embed: bw}).then(bw => {
      bw.react('0️⃣');
      bw.react('1️⃣');
      bw.react('2️⃣');
      bw.react('3️⃣');
      bw.react('4️⃣');
      bw.react('5️⃣');

		 const collector = bw.createReactionCollector(
    (reaction, user) => ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id,
    {idle: 300000}
  )
    
	  collector.on('collect', reaction => {
		
    		if (reaction.emoji.name === '1️⃣') {
          reaction.users.remove(message.author.id);
					const soloEmbed = new Discord.MessageEmbed()
          .setColor("#00FF00")
          .setTitle("**Solos**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${solo_fkdr}**`, true)
          .addField("`Final Kills`", `**${solo_fkill}**`, true)
          .addField("`Final Deaths`", `**${solo_fdeath}**`, true)
          .addField("`Win/Loss`", `**${solo_wlr}**`, true)
          .addField("`Wins`", `**${solo_wins}**`, true)
          .addField("`Losses`", `**${solo_loss}**`, true)
          .addField("`Broken/Loss`", `**${solo_bedratio}**`, true)
          .addField("`Beds Broken`", `**${solo_bedb}**`, true)
          .addField("`Beds Lost`", `**${solo_bedl}**`, true)
          .addField("`KDR`", `**${solo_kdr}**`, true)
          .addField("`Kills`", `**${solo_kills}**`, true)
          .addField("`Deaths`", `**${solo_deaths}**`, true)
          .addField("`Finals/Game`", `**${solo_fpg}**`, true)
          .addField("`Kills/Game`", `**${solo_avgk}**`, true)
          .addField("`Beds/Game`", `**${solo_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${solo_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");              
					bw.edit(soloEmbed);
				} 
        if (reaction.emoji.name === '2️⃣') {
          reaction.users.remove(message.author.id);
					const doubleEmbed = new Discord.MessageEmbed()
          .setColor("#00FF00")
          .setTitle("**Doubles**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${doub_fkdr}**`, true)
          .addField("`Final Kills`", `**${doub_fkill}**`, true)
          .addField("`Final Deaths`", `**${doub_fdeath}**`, true)
          .addField("`Win/Loss`", `**${doub_wlr}**`, true)
          .addField("`Wins`", `**${doub_wins}**`, true)
          .addField("`Losses`", `**${doub_loss}**`, true)
          .addField("`Broken/Loss`", `**${doub_bedratio}**`, true)
          .addField("`Beds Broken`", `**${doub_bedb}**`, true)
          .addField("`Beds Lost`", `**${doub_bedl}**`, true)
          .addField("`KDR`", `**${doub_kdr}**`, true)
          .addField("`Kills`", `**${doub_kills}**`, true)
          .addField("`Deaths`", `**${doub_deaths}**`, true)
          .addField("`Finals/Game`", `**${doub_fpg}**`, true)
          .addField("`Kills/Game`", `**${doub_avgk}**`, true)
          .addField("`Beds/Game`", `**${doub_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${doub_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");   
					bw.edit(doubleEmbed);
				} 
        if (reaction.emoji.name === '3️⃣') {
          reaction.users.remove(message.author.id);
					const trioEmbed = new Discord.MessageEmbed()
          .setColor("#00FF00")
          .setTitle("**Trios**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${trio_fkdr}**`, true)
          .addField("`Final Kills`", `**${trio_fkill}**`, true)
          .addField("`Final Deaths`", `**${trio_fdeath}**`, true)
          .addField("`Win/Loss`", `**${trio_wlr}**`, true)
          .addField("`Wins`", `**${trio_wins}**`, true)
          .addField("`Losses`", `**${trio_loss}**`, true)
          .addField("`Broken/Loss`", `**${trio_bedratio}**`, true)
          .addField("`Beds Broken`", `**${trio_bedb}**`, true)
          .addField("`Beds Lost`", `**${trio_bedl}**`, true)
          .addField("`KDR`", `**${trio_kdr}**`, true)
          .addField("`Kills`", `**${trio_kills}**`, true)
          .addField("`Deaths`", `**${trio_deaths}**`, true)
          .addField("`Finals/Game`", `**${trio_fpg}**`, true)
          .addField("`Kills/Game`", `**${trio_avgk}**`, true)
          .addField("`Beds/Game`", `**${trio_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${trio_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");   
					bw.edit(trioEmbed);
				}
        if (reaction.emoji.name === '4️⃣') {
          reaction.users.remove(message.author.id);
          const fourEmbed = new Discord.MessageEmbed()
          .setColor("#00FF00")
          .setTitle("**Fours**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${four_fkdr}**`, true)
          .addField("`Final Kills`", `**${four_fkill}**`, true)
          .addField("`Final Deaths`", `**${four_fdeath}**`, true)
          .addField("`Win/Loss`", `**${four_wlr}**`, true)
          .addField("`Wins`", `**${four_wins}**`, true)
          .addField("`Losses`", `**${four_loss}**`, true)
          .addField("`Broken/Loss`", `**${four_bedratio}**`, true)
          .addField("`Beds Broken`", `**${four_bedb}**`, true)
          .addField("`Beds Lost`", `**${four_bedl}**`, true)
          .addField("`KDR`", `**${four_kdr}**`, true)
          .addField("`Kills`", `**${four_kills}**`, true)
          .addField("`Deaths`", `**${four_deaths}**`, true)
          .addField("`Finals/Game`", `**${four_fpg}**`, true)
          .addField("`Kills/Game`", `**${four_avgk}**`, true)
          .addField("`Beds/Game`", `**${four_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${four_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");   
					bw.edit(fourEmbed);
				}
        if (reaction.emoji.name === '5️⃣') {
          reaction.users.remove(message.author.id);
          const v4Embed = new Discord.MessageEmbed()
          .setColor("#00FF00")
          .setTitle("**4v4**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${v4_fkdr}**`, true)
          .addField("`Final Kills`", `**${v4_fkill}**`, true)
          .addField("`Final Deaths`", `**${v4_fdeath}**`, true)
          .addField("`Win/Loss`", `**${v4_wlr}**`, true)
          .addField("`Wins`", `**${v4_wins}**`, true)
          .addField("`Losses`", `**${v4_loss}**`, true)
          .addField("`Broken/Loss`", `**${v4_bedratio}**`, true)
          .addField("`Beds Broken`", `**${v4_bedb}**`, true)
          .addField("`Beds Lost`", `**${v4_bedl}**`, true)
          .addField("`KDR`", `**${v4_kdr}**`, true)
          .addField("`Kills`", `**${v4_kills}**`, true)
          .addField("`Deaths`", `**${v4_deaths}**`, true)
          .addField("`Finals/Game`", `**${v4_fpg}**`, true)
          .addField("`Kills/Game`", `**${v4_avgk}**`, true)
          .addField("`Beds/Game`", `**${v4_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${v4_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");   
					bw.edit(v4Embed);
        }
        if (reaction.emoji.name === '0️⃣') {
          reaction.users.remove(message.author.id);
          const bwEmbed = new Discord.MessageEmbed()

          .setColor("#00FF00")
          .setTitle("**All Modes**")
          .addField("`Player`", `[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${fkdr}**`, true)
          .addField("`Final Kills`", `**${fkill}**`, true)
          .addField("`Final Deaths`", `**${fdeath}**`, true)
          .addField("`Win/Loss`", `**${wlr}**`, true)
          .addField("`Wins`", `**${wins}**`, true)
          .addField("`Losses`", `**${loss}**`, true)
          .addField("`Broken/Loss`", `**${bedratio}**`, true)
          .addField("`Beds Broken`", `**${bedb}**`, true)
          .addField("`Beds Lost`", `**${bedl}**`, true)
          .addField("`KDR`", `**${kdr}**`, true)
          .addField("`Kills`", `**${kills}**`, true)
          .addField("`Deaths`", `**${deaths}**`, true)
          .addField("`Finals/Game`", `**${fpg}**`, true)
          .addField("`Kills/Game`", `**${avgk}**`, true)
          .addField("`Beds/Game`", `**${avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`,
          "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png");
          bw.edit(bwEmbed);
        }
        })
   })
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

                      const bw = new Discord.MessageEmbed()
                        .setColor("#b22121")
                        .setTitle("**All modes**")
                        .addField(
                          "`Player`",
                          `[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`
                        )
                        //.setImage(`https://visage.surgeplay.com/full/${id}`, true)
                        .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                        .addField("`Final KDR`", `**${fkdr}**`, true)
                        .addField("`Final Kills`", `**${fkill}**`, true)
                        .addField("`Final Deaths`", `**${fdeath}**`, true)
                        .addField("`Win/Loss`", `**${wlr}**`, true)
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Losses`", `**${loss}**`, true)
                        .addField("`Broken/Loss`", `**${bedratio}**`, true)
                        .addField("`Beds Broken`", `**${bedb}**`, true)
                        .addField("`Beds Lost`", `**${bedl}**`, true)
                        .addField("`KDR`", `**${kdr}**`, true)
                        .addField("`Kills`", `**${kills}**`, true)
                        .addField("`Deaths`", `**${deaths}**`, true)
                        .addField("`Finals/Game`", `**${fpg}**`, true)
                        .addField("`Kills/Game`", `**${avgk}**`, true)
                        .addField("`Beds/Game`", `**${avgb}**`, true)
                        .addField("`Star`", `**${star}**`, true)
                        .addField("`Winstreak`", `**${winstreak}**`, true)
                        .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                        .setImage(`${skin}`, true)
                        .setTimestamp("")
                        .setFooter(
                          `${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png"
                        );

    const bwEmbed = message.reply({embed: bw}).then(bw => {
      bw.react('0️⃣');
      bw.react('1️⃣');
      bw.react('2️⃣');
      bw.react('3️⃣');
      bw.react('4️⃣');
      bw.react('5️⃣');

		 const collector = bw.createReactionCollector(
    (reaction, user) => ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'].includes(reaction.emoji.name) && user.id === message.author.id,
    {idle: 300000}
  )
    
	  collector.on('collect', reaction => {
		
    		if (reaction.emoji.name === '1️⃣') {
          reaction.users.remove(message.author.id);
					const soloEmbed = new Discord.MessageEmbed()
          .setColor("#b22121")
          .setTitle("**Solos**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${solo_fkdr}**`, true)
          .addField("`Final Kills`", `**${solo_fkill}**`, true)
          .addField("`Final Deaths`", `**${solo_fdeath}**`, true)
          .addField("`Win/Loss`", `**${solo_wlr}**`, true)
          .addField("`Wins`", `**${solo_wins}**`, true)
          .addField("`Losses`", `**${solo_loss}**`, true)
          .addField("`Broken/Loss`", `**${solo_bedratio}**`, true)
          .addField("`Beds Broken`", `**${solo_bedb}**`, true)
          .addField("`Beds Lost`", `**${solo_bedl}**`, true)
          .addField("`KDR`", `**${solo_kdr}**`, true)
          .addField("`Kills`", `**${solo_kills}**`, true)
          .addField("`Deaths`", `**${solo_deaths}**`, true)
          .addField("`Finals/Game`", `**${solo_fpg}**`, true)
          .addField("`Kills/Game`", `**${solo_avgk}**`, true)
          .addField("`Beds/Game`", `**${solo_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${solo_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
					bw.edit(soloEmbed);
				} 
        if (reaction.emoji.name === '2️⃣') {
          reaction.users.remove(message.author.id);
					const doubleEmbed = new Discord.MessageEmbed()
          .setColor("#b22121")
          .setTitle("**Doubles**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${doub_fkdr}**`, true)
          .addField("`Final Kills`", `**${doub_fkill}**`, true)
          .addField("`Final Deaths`", `**${doub_fdeath}**`, true)
          .addField("`Win/Loss`", `**${doub_wlr}**`, true)
          .addField("`Wins`", `**${doub_wins}**`, true)
          .addField("`Losses`", `**${doub_loss}**`, true)
          .addField("`Broken/Loss`", `**${doub_bedratio}**`, true)
          .addField("`Beds Broken`", `**${doub_bedb}**`, true)
          .addField("`Beds Lost`", `**${doub_bedl}**`, true)
          .addField("`KDR`", `**${doub_kdr}**`, true)
          .addField("`Kills`", `**${doub_kills}**`, true)
          .addField("`Deaths`", `**${doub_deaths}**`, true)
          .addField("`Finals/Game`", `**${doub_fpg}**`, true)
          .addField("`Kills/Game`", `**${doub_avgk}**`, true)
          .addField("`Beds/Game`", `**${doub_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${doub_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
					bw.edit(doubleEmbed);
				} 
        if (reaction.emoji.name === '3️⃣') {
          reaction.users.remove(message.author.id);
					const trioEmbed = new Discord.MessageEmbed()
          .setColor("#b22121")
          .setTitle("**Trios**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${trio_fkdr}**`, true)
          .addField("`Final Kills`", `**${trio_fkill}**`, true)
          .addField("`Final Deaths`", `**${trio_fdeath}**`, true)
          .addField("`Win/Loss`", `**${trio_wlr}**`, true)
          .addField("`Wins`", `**${trio_wins}**`, true)
          .addField("`Losses`", `**${trio_loss}**`, true)
          .addField("`Broken/Loss`", `**${trio_bedratio}**`, true)
          .addField("`Beds Broken`", `**${trio_bedb}**`, true)
          .addField("`Beds Lost`", `**${trio_bedl}**`, true)
          .addField("`KDR`", `**${trio_kdr}**`, true)
          .addField("`Kills`", `**${trio_kills}**`, true)
          .addField("`Deaths`", `**${trio_deaths}**`, true)
          .addField("`Finals/Game`", `**${trio_fpg}**`, true)
          .addField("`Kills/Game`", `**${trio_avgk}**`, true)
          .addField("`Beds/Game`", `**${trio_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${trio_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
					bw.edit(trioEmbed);
				}
        if (reaction.emoji.name === '4️⃣') {
          reaction.users.remove(message.author.id);
          const newEmbed = new Discord.MessageEmbed()
          .setColor("#b22121")
          .setTitle("**Fours**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${four_fkdr}**`, true)
          .addField("`Final Kills`", `**${four_fkill}**`, true)
          .addField("`Final Deaths`", `**${four_fdeath}**`, true)
          .addField("`Win/Loss`", `**${four_wlr}**`, true)
          .addField("`Wins`", `**${four_wins}**`, true)
          .addField("`Losses`", `**${four_loss}**`, true)
          .addField("`Broken/Loss`", `**${four_bedratio}**`, true)
          .addField("`Beds Broken`", `**${four_bedb}**`, true)
          .addField("`Beds Lost`", `**${four_bedl}**`, true)
          .addField("`KDR`", `**${four_kdr}**`, true)
          .addField("`Kills`", `**${four_kills}**`, true)
          .addField("`Deaths`", `**${four_deaths}**`, true)
          .addField("`Finals/Game`", `**${four_fpg}**`, true)
          .addField("`Kills/Game`", `**${four_avgk}**`, true)
          .addField("`Beds/Game`", `**${four_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${four_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
					bw.edit(newEmbed);
				}
        if (reaction.emoji.name === '5️⃣') {
          reaction.users.remove(message.author.id);
          const v4Embed = new Discord.MessageEmbed()
          .setColor("#b22121")
          .setTitle("**4v4**")
          .addField("`Player`",`[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${v4_fkdr}**`, true)
          .addField("`Final Kills`", `**${v4_fkill}**`, true)
          .addField("`Final Deaths`", `**${v4_fdeath}**`, true)
          .addField("`Win/Loss`", `**${v4_wlr}**`, true)
          .addField("`Wins`", `**${v4_wins}**`, true)
          .addField("`Losses`", `**${v4_loss}**`, true)
          .addField("`Broken/Loss`", `**${v4_bedratio}**`, true)
          .addField("`Beds Broken`", `**${v4_bedb}**`, true)
          .addField("`Beds Lost`", `**${v4_bedl}**`, true)
          .addField("`KDR`", `**${v4_kdr}**`, true)
          .addField("`Kills`", `**${v4_kills}**`, true)
          .addField("`Deaths`", `**${v4_deaths}**`, true)
          .addField("`Finals/Game`", `**${v4_fpg}**`, true)
          .addField("`Kills/Game`", `**${v4_avgk}**`, true)
          .addField("`Beds/Game`", `**${v4_avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${v4_winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
					bw.edit(v4Embed);
        }
        if (reaction.emoji.name === '0️⃣') {
          reaction.users.remove(message.author.id);
          const bwEmbed = new Discord.MessageEmbed()

          .setColor("#b22121")
          .setTitle("**All Modes**")
          .addField("`Player`", `[**${drank} ${dname} [${star}✫]**](https://plancke.io/hypixel/player/stats/${username})`)
          .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
          .addField("`Final KDR`", `**${fkdr}**`, true)
          .addField("`Final Kills`", `**${fkill}**`, true)
          .addField("`Final Deaths`", `**${fdeath}**`, true)
          .addField("`Win/Loss`", `**${wlr}**`, true)
          .addField("`Wins`", `**${wins}**`, true)
          .addField("`Losses`", `**${loss}**`, true)
          .addField("`Broken/Loss`", `**${bedratio}**`, true)
          .addField("`Beds Broken`", `**${bedb}**`, true)
          .addField("`Beds Lost`", `**${bedl}**`, true)
          .addField("`KDR`", `**${kdr}**`, true)
          .addField("`Kills`", `**${kills}**`, true)
          .addField("`Deaths`", `**${deaths}**`, true)
          .addField("`Finals/Game`", `**${fpg}**`, true)
          .addField("`Kills/Game`", `**${avgk}**`, true)
          .addField("`Beds/Game`", `**${avgb}**`, true)
          .addField("`Star`", `**${star}**`, true)
          .addField("`Winstreak`", `**${winstreak}**`, true)
          .addField("`Guild`", `[**${nguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
          .setImage(`${skin}`, true)
          .setTimestamp("")
          .setFooter(`${dname}'s ${lastl}! | Last Seen Playing ${gamemode}! on ${lastlogout2}`,
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png");
          bw.edit(bwEmbed);
        }

        })
   })
                    });
                });
            }
          });
      });
  }
};
