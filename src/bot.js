require('dotenv').config();

const {Client} = require('discord.js');
const prefix = "+";
const client = new Client();

client.on('ready', () => {
    console.log("coviDoc online!");
    console.log(`${client.user.tag}`);
});

client.on('message',(message) =>{
    console.log(message.content);
    if(message.author.bot){
        return;
    }
    if(message.content==="<@!843730517861859338>"){
        message.channel.send("Hey I'm a little busy rn, maybe we'll talk later :wink:")
    }
    if(message.content.startsWith(prefix)){
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(prefix.length)
            .split(/\s+/);
        // if(CMD_NAME==="test"){
        //     message.channel.send(`${args[0]}`+' tested negative. Stay home stay safe');
        // }
        
        console.log(CMD_NAME);
        console.log(args);
        }
    });

client.login(process.env.BOT_TOKEN);