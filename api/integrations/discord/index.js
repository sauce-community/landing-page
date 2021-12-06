// OpenSauce
//nvariable

// Third party modules import
const Discord = require('discord.js');
const process = require('process');

// Internal analytics module import
const Analytics = require('./methods/analytics');

// Bot interface
const bot = new Discord.client();

// Default export method
module.exports = () => {
    //Connect to OpenSauce guild
    const openSauceGuild = bot.guild.cache.get(process.env.OPENSAUCE_GUILD_ID);

    // On connection with Discord servers
    bot.on('ready', () => {
        console.log('[SAUCEBOT]: Connected to guild blah blah blah...');
    });

    // Login with the SAUCEBOT discord auth token
    bot.login(process.env.SAUCEBOT_TOKEN);

    // On user message
    bot.on("message", () => {

    });
}