const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function LNum(client, message, args, cmd) {
    let pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6', 'Page 7', 'Page 8'];
        let maxPage = pages.lastIndexOf('Page 8');
        let page = 1;
        let helpEmbed = new MessageEmbed()
            .setColor('PURPLE')
            //.setThumbnail(`${client.user.displayAvatarURL}`)
            .setAuthor(`${message.author.tag}`)
            .addFields(
                { name: 'Help Menu: ', value: 'Some guidance for those who are lost...' },
                { name: '-----------------------\n⏪ | Return to first page', value: '-----------------------'},
                { name: '◀️ | Go back a page', value: '-----------------------' },
                { name: '▶️ | Go foreward a page', value: '-----------------------' },
                { name: '⏩ | Skip to last page', value: '-----------------------' },
                { name: '🗑️ | Delete this menu', value: '-----------------------' },
            )
            .setThumbnail(`${client.user.displayAvatarURL({
                dynamic: true
            })}`)
            .setTimestamp()
            .setFooter(`Page ${page} of ${maxPage}`)    
    message.channel.send(helpEmbed).then(message => {
        message.react('⏪');
        message.react('◀️');
        message.react('▶️');
        message.react('⏩');
        message.react('🗑️');
        const filter = (reaction, user) => {
            return ['◀️', '▶️']
        };
        const collector = message.createReactionCollector(filter);
        collector.on('collect', (reaction, ReactionCollector) => {
            console.log(`caught emojis: ${reaction.emoji.name}`)
            if (reaction.emoji == '▶️' && message.reactions == message.author.id) {
                page+1;
                page = 2;
                let help2Embed = new MessageEmbed()
                .setColor('PURPLE')
                //.setThumbnail(`${client.user.displayAvatarURL}`)
                .setAuthor(`${message.author.tag}`)
                .addFields(
                    { name: 'Help Menu: ', value: 'Some guidance for those who are lost...' },
                    { name: '-----------------------\ntest page 2', value: '-----------------------'},
                    { name: 'this is just a test', value: '-----------------------' },
                    { name: 'im serious', value: '-----------------------' },
                    { name: 'for real tho', value: '-----------------------' },
                    { name: 'hello', value: '-----------------------' },
                )
                .setThumbnail(`${client.user.displayAvatarURL({
                    dynamic: true
                })}`)
                .setTimestamp()
                .setFooter(`Page ${page} of ${maxPage}`)
                message.delete(helpEmbed).then(message.channel.send(help2Embed));
            }
        })
    });
}