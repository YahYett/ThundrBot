const { Message, message, MessageEmbed, MessageFlags, Client, client } = require('discord.js');


exports.exec = async function pfp(client, message, args, cmd) {
    /* const client = new Client({
        disableEveryone: true,
        disableMentions: "everyone",
        partials: ['MESSAGE', 'USER', 'GUILD_MEMBER']
    }); */
    const user = message.mentions.users.first();
    let pfpuser = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Error! No user was given!')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!user) return message.channel.send(pfpuser);

    let pfpyes = new MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`${user}\'s pfp:`)
        //.setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        //.setAuthor(`${message.author.tag}`)
        .setImage(`${user.displayAvatarURL({ //ALWAYS USE USER WHEN ASKING FOR A PFP IMAGE, ELSE ALWAYS RETURNS MALFORMED URL ERROR.
            dynamic: true
        })}`)
    .setTimestamp()
    message.channel.send(pfpyes);   
}