const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function Unban(client, message, args, cmd) {
    message.channel.send('Async Issue // Broken.');
    /* let id = message.member.id;
         let unbanPerms = message.member.hasPermission('BAN_MEMBERS');
         let unbanPerm = new MessageEmbed()
             .setColor('YELLOW')
             .setTitle(`Error! Missing permission: BAN_MEMBERS`)
             .setDescription('Please update your permissions, and try again.')
             .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
             .setAuthor(`${message.author.tag}`)
             .setTimestamp()
         if (!unbanPerms) return message.channel.send(unbanPerm);
        
         let userID = args[0];
             message.guild.fetchBans().then(bans => {
                 if (bans.size == 0 || bans.size == null) {
                     let banLogs = new MessageEmbed()
                     .setColor('YELLOW')
                     .setTitle(`Error! Missing permission: BAN_MEMBERS`)
                     .setDescription('Please update your permissions, and try again.')
                     .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
                     .setAuthor(`${message.author.tag}`)
                     .setTimestamp()
                     return message.channel.send(banLogs)
                 }
                 let bannedUser = message.guild.members.cache.get(args[0]); //bans.find(bans => bans.user.id === userID);
                 if (!bannedUser) {
                     let banuserEmbed = new MessageEmbed()
                     .setColor('YELLOW')
                     .setTitle(`That user is not banned.`)
                     .setDescription('Check that the UserID is valid, and try again.')
                     .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
                     .setAuthor(`${message.author.tag}`)
                     .setFooter('Correct syntax is: {userid} {reason}')
                     .setTimestamp()
                     return message.channel.send(banuserEmbed);
                 }
                 await message.member.guild.members.unban(bannedUser.id).catch(err => {
                     console.error(err);
                 });
                 client.on('guildBanRemove', async function(guild, user) {
                     let reason = args[1];
                     //await message.member.guild.members.unban(id);
                         let unbanEmbed = new MessageEmbed()
                         .setColor('GREEN')
                         .setTitle(`Success! ${message.member.user.id} has been unbanned by ${message.author.tag}!`)
                         .setDescription(`Reason: ${reason}`)
                         .setThumbnail('https://i.imgur.com/KAMsDYd.png')
                         .setAuthor(`${message.author.tag}`)
                         .setTimestamp()
                     await message.member.guild.members.unban(bannedUser.id).then(message.channel.send(unbanEmbed));
                 });    
             });


         let reason = args[1];
         //await message.member.guild.members.unban(id);
         let unbanEmbed = new MessageEmbed()
             .setColor('GREEN')
             .setTitle(`Success! ${message.member.user.id} has been unbanned by ${message.author.tag}!`)
             .setDescription(`Reason: ${reason}`)
             .setThumbnail('https://i.imgur.com/KAMsDYd.png')
             .setAuthor(`${message.author.tag}`)
             .setTimestamp()
         message.channel.send(unbanEmbed); */
}

