const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function LNum(client, message, args, cmd) {
	let statsEmbed = new MessageEmbed()
        .setColor('PURPLE')
        .setThumbnail( `${message.author.displayAvatarURL({
            dynamic: true
        })}`)
        .setTitle(`${client.user.username}\'s Statistics: `)
        .setAuthor(`${message.author.tag}`)
        .setDescription('Statistics of the bot')
        .addFields(
            { name: '📋 Server count', value: `${client.guilds.cache.size} servers` },
            { name: '🧍 Users: ', value: `${client.users.cache.size} users` },
            { name: '💬 Channels: ', value: `${client.channels.cache.size} channels`}
        )
        .setTimestamp()
        message.channel.send(statsEmbed);
}