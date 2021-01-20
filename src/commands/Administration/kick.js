const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function Kick(client, message, args, cmd) {
    let kickperm = message.member.hasPermission('KICK_MEMBERS');
    let kickperms = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`Error! You are missing the required permission(s):`)
        .setDescription('\`\`\`KICK_MEMBERS\`\`\`')
        .setFooter('Please update your permissions, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!kickperm) return message.channel.send(kickperms);

    let member = message.mentions.members.first();
    let kickperson = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No user was given to kick!')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let Mention = message.mentions.users.size;
    if (!Mention) return message.channel.send(kickperson);

    let kickyourself = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! You cannot kick yourself!')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let kick = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kick.id === message.author.id) return message.channel.send(kickyourself);

    let notkick = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! I cannot kick this user!')
        .setDescription('Do they have a higher role? Do I have permissions?')
        .setThumbnail('https://p7.hiclipart.com/preview/589/40/994/computer-icons-question-mark-clip-art-question-mark.jpg')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (member.kickable === false) return message.channel.send(notkick);
  
    let kickreason = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No reason provided!')
        .setDescription('Please provide a reason, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let reason = args.slice(1).join(` `);
    if (!reason) return message.channel.send(kickreason); //reason = "No reason provided!";

    await member.kick(reason)
        //let kickno = new MessageEmbed()
        //.setColor('PURPLE')
        //.setTitle(`Error! I could not kick, Reason: ${error}`)
        //.setDescription(`Aplogies for that, ${message.author}.`)
        //.setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        //.setAuthor(`${message.author.tag}`)
        //.setTimestamp()
        //.catch(_error => message.channel.send(kickno));
        
        let kickyes = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`Success! ${member.user.tag} has been kicked by ${message.author.tag}!`)
            .setDescription(`Reason: ${reason}`)
            .setThumbnail('https://i.imgur.com/KAMsDYd.png')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
    if (member.kick(reason)) return await message.channel.send(kickyes);
}