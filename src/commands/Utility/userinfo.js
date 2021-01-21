const { Message, message, MessageEmbed, MessageFlags } = require('discord.js');
const moment = require('moment');

exports.exec = async function UInfo(client, message, args, cmd) {
    let member = message.mentions.members.first();
        let user = message.mentions.members.first();
        //let personEmbed = new MessageEmbed()
        //    .setColor('PURPLE')
        //    .setTitle('Error! That user is a bot!')
        //    .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        //    .setAuthor(`${message.author.tag}`)
        //    .setTimestamp()
        //if (message.mentions.users.first().bot) return message.channel.send(personEmbed);

        let nouser = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! No user was given!')
            .setDescription('Mention them using **@tag**')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (!message.mentions.users.size) return message.channel.send(nouser);  
        
        let noperm = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! You do not have permissions to execute this command!')
            .setDescription('Please update your permissions, and try again.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send(noperm);

        // INSERT VALID USER CODE HERE <><><><><><><><><><><><><>

        let rolearray = member.roles.cache.array(member);
        let userEmbed = new MessageEmbed()
            .setColor('PURPLE')
            .setThumbnail(`${message.author.displayAvatarURL({
                dynamic: true
            })}`)
            //.setTitle(`Info about ${member.user.username}: `)
            //.setAuthor(`${message.author.tag}`)
            .setDescription(`**Info about ${member}\'s discord client:**`)
            .addFields(
                //{ name: '\u200b', value: '\u200b' },
                { name: 'Username: ', value: `${member.user.username}`, inline: true },
                { name: 'Discriminator: ', value: `${member.user.discriminator}`, inline: true },
                { name: 'Tag: ', value: `${member.user.tag}`, inline: true },
                { name: 'ID: ', value: `${member.user.id}`, inline: true},
                { name: 'Nickname: ', value: `${member.nickname !== null ? `${member.nickname}` : 'None'}` },
                { name: 'Status: ', value: `${user.presence.status}`},
                //{ name: '\u200b', value: '\u200b' },
                { name: 'In Guild: ', value: `${message.guild.name}`, inline: true },
                { name: 'Guild ID: ', value: `${message.guild.id}`, inline: true },
                //{ name: 'Playing Game: ', value: `${user.presence ? user.presence : 'None'}` }, RETURNS [object Object] likley not implemented, or has been changed in discjs
                { name: 'Joined Guild: ', value: `${moment.utc(member.joinedAt).format('Do MMMM YYYY HH:mm:ss')}` },
                { name: 'Account Creation Date: ', value: `${moment.utc(member.user.createdAt).format('Do MMMM YYYY HH:mm:ss')}`},
                { name: 'Roles: ', value: `${rolearray}` }
            )
            //.setImage('https://cdn.discordapp.com/attachments/696143592552661073/742525959197950003/strife_1.png')
        message.channel.send(userEmbed);
}