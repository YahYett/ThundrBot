const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function ping(client, message, args, cmd) {
	if (cmd == 'ping'.toLowerCase()) {
		const msg = await message.channel.send('🏓 Pinging...');
		let pingEmbed = new MessageEmbed()
			.setColor('PURPLE')
			.setTitle('🏓 Pong!')
			.setAuthor(`${message.author.tag}`)
			.setDescription('A basic ping command!')
			.setThumbnail(`${message.author.displayAvatarURL({
				dynamic: true
			})}`)
			.addFields(
				{ name: 'Latency: ', value: `\`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\`` },
				{ name: 'API: ', value: `\`${Math.round(client.ws.ping)}ms\`` }
			)
			.setTimestamp()
			.setFooter(client.user.username)
		message.channel.send(pingEmbed);
		msg.delete(msg);
		const roundTrip = msg.createdTimestamp - message.createdTimestamp;
		if (roundTrip > 1000) {
			return message.channel.send('f');
		}
	}
}