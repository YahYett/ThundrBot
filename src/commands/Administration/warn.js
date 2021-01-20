const { MessageEmbed } = require('discord.js');
const mongo = require('../../mongo.js');
const warns = require('../../Schemas/Warns.js');

exports.exec = async function Warn(client, message, args, cmd) {
    let user = message.member.permissions.has('MUTE_MEMBERS');
    if (!user) {
        let nopermEmbed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! You are missing the following permissions:')
            .setDescription('\`\`\`MUTE_MEMBERS\`\`\`')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        return message.channel.send(nopermEmbed);
    }
    let target = message.mentions.users.first();
    if (!target) {
        return message.channel.send('You must have someone to warn.');
    }

    const guildID = message.guild.id;
    const userID = message.member.id;
    const reason = args.join(' ');
    
    const warning = {
        author: message.author.tag,
        UserID: message.author.id,
        timestamp: new Date().getTime() ,
        reason
    }
    await mongo().then(async mongoose => {
        try {
            await warns.findOneAndUpdate({
                guildID,
                userID
            }, {
                guildID,
                userID,
                $push: {
                    warnings: warning
                }
            }, {
                upsert: true
            })
        } finally {
            mongoose.connection.close();
        }
    })
}