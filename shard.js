const {ShardingManager} = require('discord.js');
const Database = require("@replit/database")
const db = new Database()
db.get("token").then(value => {
const shards = new ShardingManager("./index.js", {
        token: value,
        totalShards: 4
});

shards.on("shardCreate", async (shard) =>  {
        console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.spawn(shards.totalShards, 10000);
});