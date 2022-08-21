//initializing dotenv file
require('dotenv').config();

const config = process.env;

//connecting discord.js
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', msg => {
    try {
        if (msg.content === "Hello" || msg.content === "Hi" || msg.content === "Hey") {
            msg.reply(`Hey there ${msg.author.username}`)
        }
    } catch (error) {
        console.log(error)
    }
});

//Log in our bot
client.login(config.CLIENT_TOKEN)