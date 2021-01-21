const { Client } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const path = require('path');
const os = require('os');
const ms = require('ms');
const { setInterval } = require('timers');
const { error } = require('log-symbols');
const colors = require('colors');
const { createVerify } = require('crypto');

const client = new Client({
    disableMentions: 'everyone',
    disableEveryone: true,
    partials: ['MESSAGE', 'USER', 'GUILD_MEMBER']
});

client.commands = new Map();
client.on('warn', error => console.warn(colors.yellow('[WARNING] ', error)));
client.on('error', error => console.error(colors.red('[ERROR] ', error)));
process.on('unhandledRejection', (promise, reason) => {
    console.log(colors.red('[FATAL]'), colors.gray('Unhandled Promise Rejection at: ') + colors.red(promise)), colors.gray(' reason: '), colors.red(reason.catch());
});

config({
    path: __dirname + '/.env'
});

console.log(colors.yellow('[INFO] Loading Command Processes...'));
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter((file) => file.endsWith('.js'));
for (let file of commandFiles) {
    client.commands = new Map();
    const command = require(path.join(__dirname, 'commands', `${file}`));
    console.log(colors.gray(`Loaded `, colors.yellow(file), `command.`));
    const commandname = file.split('.')[0];
    client.commands.set(commandname, command);
    if (!file) {
        return console.log(colors.red('[ERROR] '), colors.gray('Error loading command '), colors.red(file), color.gray('in Directory'), colors.red(__dirname), colors.gray('.'));
    }
    console.log(colors.green(`Loaded all ${commandFiles.length} commands!`));
}

console.log(colors.yellow('[INFO] Starting Client and Child Processes...'));
client.on('ready', () => {
    console.log(colors.gray('I\'m online, my name is '), colors.cyan(`${client.user.username}`));
    console.log(colors.gray(`I have started, with`), colors.cyan(`${client.users.cache.size}`), colors.gray(`users, in `), colors.cyan(`${client.channels.cache.size}`), colors.gray(`channels of `), colors.cyan(`${client.guilds.cache.size}`), colors.gray(`guilds.`));
    const activities = 'with The Lounge. 😎';
     setInterval(() => {
         client.user.setActivity(activities); //USE ACTIVITY, NOT PRESENCE.
     }, 8000);
})

client.on("message", async message => {
    if (message.channel.type == 'text') {
        console.log(colors.bold(colors.cyan('[CHAT]'), colors.grey(`${message.author.tag} said: `, colors.cyan(message.content),`in guild: ${colors.cyan(message.guild.name)}`)));
    }
    if (message.channel.type == 'dm') {
        client.users.fetch('391335699493814275').then((user) => {
            if (message.author.bot) {
                return console.error(error);
            }
            return user.send(`[DM] From: ${message.author.tag}: ${message.content}`);
        });
        return console.log(colors.yellow('[Direct Message]'), colors.gray('From: '), colors.gray(colors.underline(`${message.author.tag}:`)), colors.yellow(`${message.content}`));
    }

    const prefix = require('./config.json');
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix.prefix)) return;
     
    const args = message.content.slice(prefix.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd == 'ban'.toLowerCase()) {
        var ban = require('./Commands/Administration/ban.js');
        ban.exec(client, message, args, cmd);
    }
    if (cmd == 'delrole'.toLowerCase()) {
        var delrole = require('./Commands/Administration/delrole.js');
        delrole.exec(client, message, args, cmd);
    }
    if (cmd == 'kick'.toLowerCase()) {
        var kick = require('./Commands/Administration/kick.js');
        kick.exec(client, message, args, cmd);
    }
    if (cmd == 'logs'.toLowerCase()) {
        var logs = require('./Commands/Administration/logs.js');
        logs.exec(client, message, args, cmd);
    }
    if (cmd == 'mute'.toLowerCase()) {
        var mute = require('./Commands/Administration/mute.js');
        mute.exec(client, message, args, cmd);
    }
    if (cmd == 'purge'.toLowerCase()) {
        var purge = require('./Commands/Administration/purge.js');
        purge.exec(client, message, args, cmd);
    }
    if (cmd == 'reload'.toLowerCase()) {
        var reload = require('./Commands/Administration/reload.js');
        reload.exec(client, message, args, cmd);
    }
    if (cmd == 'unban'.toLowerCase()) {
        var unban = require('./Commands/Administration/unban.js');
        unban.exec(client, message, args, cmd);
    }
    if (cmd == 'unmute'.toLowerCase()) {
        var unmute = require('./Commands/Administration/unmute.js');
        unmute.exec(client, message, args, cmd);
    }
    if (cmd == 'warn'.toLowerCase()) {
        var warn = require('./Commands/Administration/warn.js');
        warn.exec(client, message, args, cmd);
    }
    if (cmd == 'cmds'.toLowerCase()) {
        var cmds = require('./Commands/Utility/cmds.js');
        cmds.exec(client, message, args, cmd);
    }
    if (cmd == 'guildinfo'.toLowerCase() || cmd == 'ginfo'.toLowerCase()) {
        var guildinfo = require('./Commands/Utility/guildinfo.js');
        guildinfo.exec(client, message, args, cmd);
    }
    if (cmd == 'help'.toLowerCase() || cmd == 'h'.toLowerCase()) {
        var help = require('./Commands/Utility/help.js');
        help.exec(client, message, args, cmd);
    }
    if (cmd == 'info'.toLowerCase() || cmd == 'i'.toLowerCase()) {
        var info = require('./Commands/Utility/info.js');
        info.exec(client, message, args, cmd);
    }
    if (cmd == 'pfp'.toLowerCase() || cmd == 'avatar'.toLowerCase()) {
        var pfp = require('./Commands/Utility/pfp.js');
        pfp.exec(client, message, args, cmd);
    }
    if (cmd == 'ping'.toLowerCase()) {
        var ping = require('./Commands/Utility/ping.js');
        ping.exec(client, message, args, cmd);
    }
    if (cmd == 'stats'.toLowerCase()) {
        var stats = require('./Commands/Utility/stats.js');
        stats.exec(client, message, args, cmd);
    }
    if (cmd == 'userinfo'.toLowerCase()) {
        var userinfo = require('./Commands/Utility/userinfo.js');
        userinfo.exec(client, message, args, cmd);
    }
});
client.login(process.env.TOKEN);