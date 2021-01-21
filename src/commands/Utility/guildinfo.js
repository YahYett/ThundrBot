const { message, MessageEmbed } = require('discord.js');

exports.exec = async function GInfo(client, message, args, cmd) {
    const randomBetween = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
    const color = [
        randomBetween(0, 255),
        randomBetween(0, 255),
        randomBetween(0, 255)
    ];
    let memberHighestRole = message.member.roles.highest.name;
    //let rolearray = member.roles.cache.array(member);
    let guildEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('General Guild Info')
        .setThumbnail(message.guild.iconURL({
            dynamic: true
        }))
        .setDescription(`${message.guild}\'s info:`)
        .addFields(
            { name: 'Guild Owner:', value: `\`${message.guild.owner.tag}\`` },
            { name: 'Member Count:', value: `\`${message.guild.memberCount}\`` },
            { name: 'Emoji Count:', value: `\`${message.guild.emojis.cache.size}\`` },
            { name: 'Roles Count:', value: `\`${message.guild.roles.cache.size}\`` },
            { name: 'Highest role:', value: `\`${message.guild.roles.highest.name}\`` },
            { name: 'Your Highest Role:', value: `\`${memberHighestRole}\`` }
        )
        .setFooter(`${client.user.tag}`)
        .setTimestamp()
    message.channel.send(guildEmbed);
}