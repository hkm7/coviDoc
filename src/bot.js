require('dotenv').config();

const {Client} = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log("coviDoc online!");
    console.log(`${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);