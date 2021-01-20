const { message, MessageEmbed } = require('discord.js')

exports.exec = async function LNum(client, message, args, cmd) {
    let banperm = message.member.hasPermission('BAN_MEMBERS');
    let banperms = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`Error! Missing permissions:`)
        .setDescription('\`\`\`BAN_MEMBERS\`\`\`')
        .setFooter('Please update your permissions, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!banperm) return message.channel.send(banperms);

    let member = message.mentions.members.first();
    let banperson = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No user was given to ban!')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!message.mentions.users.size) return message.channel.send(banperson);

    let banyourself = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! You cannot ban yourself!')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let ban = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (ban.id === message.author.id) return message.channel.send(banyourself);
    
    //INSERT VALID USER CODE HERE (see WIP) <><><><><><><><><><><><><><><>

    //let member = message.mentions.members.first();
    //if (!member)
    //    return message.channel.send("➡️ Please mention a valid member of this server. ⬅️");

    let notban = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! I cannot ban this user!')
        .setDescription('Do they have a higher role? Do I have permissions?')
        .setThumbnail('https://p7.hiclipart.com/preview/589/40/994/computer-icons-question-mark-clip-art-question-mark.jpg')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (member.bannable === false) return message.channel.send(notban);
  
    let banreason = new MessageEmbed()
        .setColor('PURPLE')
        .setTitle('Error! No reason provided!')
        .setDescription('Please provide a reason, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let reason = args.slice(1).join(` `);
    if (!reason) return message.channel.send(banreason);
    
    await member.ban(reason)
        //let banno = new MessageEmbed()
        //    .setColor('PURPLE')
        //    .setTitle(`Error! I could not kick, Reason: ${error}`)
        //    .setDescription(`Aplogies for that, ${message.author}.`)
        //    .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        //    .setAuthor(`${message.author.tag}`)
        //    .setTimestamp()
        //.catch(error => message.channel.send(banno));

        let banid = message.member.id;
        let banyes = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`Success! ${member.user.tag} has been banned by ${message.author.tag}!`)
            .setDescription(`Reason: **${reason}**`)
            .setThumbnail('https://i.imgur.com/KAMsDYd.png')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
            .setFooter(`Ban ID: ${banid}`)
    if (member.ban(reason)) return await message.channel.send(banyes).then(banyes => {
        banyes.MessageReaction('👌');
    });
}
