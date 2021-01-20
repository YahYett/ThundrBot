const { Client, Message, message, MessageEmbed, MessageFlags, Guild } = require('discord.js');
const { error } = require('log-symbols'); 

exports.exec = async function Purge(client, message, args, cmd) {
    const noperm = message.member.permissions.has('MANAGE_MESSAGES');
        let noperms = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! You are missing the following permissions:')
            .setDescription('\`\`\`MANAGE_MESSAGES\`\`\`')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (!noperm) return message.channel.send(noperms);

    const amount = args.join(' ');
        let noamount = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('Error! You must specify an amount to delete!')
            .setDescription('Please provide an amount, and try again.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (!amount) return message.channel.send(noamount);

        let NaNAmount = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('Error! The value specified is not valid!')
            .setDescription('Please provide a valid number, and try again.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (isNaN(amount)) return message.channel.send(NaNAmount);

        let maxdel = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('Error! You cannot delete more than 100 messages!')
            .setDescription('Please try a number 100 or under.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (amount > 100) return message.channel.send(maxdel);
           
        let mindel = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('Error! Value specified cannot be less than 1')
            .setDescription('Please try a number 1 or above.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        if (amount < 1) return message.channel.send(mindel);  

        const nobotperm = message.guild.me.hasPermission('MANAGE_ROLES');
        if (!nobotperm) {
            let purgeno = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`Error! Messages not deleted!`)
            .setDescription(`Reason: ${error}`)
            .setThumbnail('https://p7.hiclipart.com/preview/598/31/749/computer-icons-x-mark-red-x-mark.jpg')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
            message.channel.send(purgeno);
        }    
    await message.channel.messages.fetch({limit: amount}).then(messages => {
    (message.channel.bulkDelete(messages))  
        let purgeyes = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`Success! ${amount} messages have been deleted!`)
            .setDescription(`Deleted by: ${message.author.tag}`)
            .setThumbnail('https://i.imgur.com/KAMsDYd.png')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        message.channel.send(purgeyes)  
    });    
}