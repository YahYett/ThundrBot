const { Message, message, MessageEmbed, MessageFlags } = require('discord.js');
const os = require('os');
const moment = require('moment');
let commandFiles = require('../../Strife.js');
const utc = require('moment');
const botversion = require('../../package.json');
const djsversion = require('../../package.json');

exports.exec = async function Info(client, message, args, cmd) {
    //Convert total memory to kb, mb and gb 
    var total_memory = os.totalmem(); 
    var total_mem_in_kb = total_memory/1024; 
    var total_mem_in_mb = total_mem_in_kb/1024; 
    var total_mem_in_gb = total_mem_in_mb/1024; 

    total_mem_in_kb = Math.floor(total_mem_in_kb); 
    total_mem_in_mb = Math.floor(total_mem_in_mb); 
    total_mem_in_gb = Math.floor(total_mem_in_gb); 

    total_mem_in_mb = total_mem_in_mb%1024; 
    total_mem_in_kb = total_mem_in_kb%1024; 
    total_memory = total_memory%1024;

    const user = message.mentions.users.first();
    let infoEmbed = new MessageEmbed()
        .setColor('PURPLE')
        .setThumbnail(`${client.user.displayAvatarURL({ //ALWAYS USE USER WHEN ASKING FOR A PFP IMAGE, ELSE ALWAYS RETURNS MALFORMED URL ERROR.
            dynamic: true
        })}`)
        .setTitle(`${client.user.username}\'s info: `)
        .setAuthor(`${message.author.tag}`)
        .setDescription('Info about the bot')
        .addFields(
            { name: 'Client: ', value: `${client.user.tag}\nID: ${client.user.id}\nDiscriminator: ${client.user.discriminator}` },
            { name: 'Servers: ', value: `${client.guilds.cache.size.toLocaleString()}`, inline: true },
            { name: 'Users: ', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true },
            { name: 'Channels: ', value: `${client.channels.cache.size.toLocaleString()}`, inline: true },
            { name: 'Commands: ', value: `${commandFiles.length}` },
            { name: 'Creation Date: ', value: `${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}` },
        )
        .addFields(
            { name: 'Node.js: ', value: `${process.version}` },
            { name: 'Bot version: ', value: `v${botversion.botversion}` },
            { name: 'Discord.js version: ', value: `v${djsversion.dependencies["discord.js"]}` }
        )
        //.setImage('https://cdn.discordapp.com/attachments/696143592552661073/742525959197950003/strife_1.png')
        .setTimestamp()
        /*
        .setFooter(`${client.user.displayAvatarURL({
            dynamic: true
        })}`)
        */
    message.channel.send(infoEmbed);
}