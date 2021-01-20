const { Message, message, MessageEmbed, MessageFlags, MessageReaction } = require('discord.js')

exports.exec = async function DelRole(client, message, args, cmd) {
    let perms = message.member.hasPermission('ADMINISTRATOR');
    if (!perms) {
        let permEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`Error! Missing permissions:`)
        .setDescription('\`\`\`ADMINISTRATOR\`\`\`')
        .setFooter('Please update your permissions, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
        return message.channel.send(permEmbed);
    }

}