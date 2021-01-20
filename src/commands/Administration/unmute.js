const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function Unmute(client, message, args, cmd) {
    let member = message.mentions.members.first();
    let memCheck = message.guild.roles.cache.find(role => role.name === 'Muted');
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    //let memberRole = message.guild.roles.cache.find(role => role.name === 'Member');
    // let hasMute = member.guild.roles.cache.has(memCheck);
    
    // if (hasMute == true) {
    //     return;
    // } else if (hasMute == false) {
    //     return message.channel.send(`\`${member.user.tag}\` is not muted.`);
    // };

    let unmutePerms = message.member.hasPermission('MUTE_MEMBERS');
    let unmutePerm = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! Missing permissions: MUTE_MEMBERS')
        .setDescription('Update your permissions and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!unmutePerms) return message.channel.send(unmutePerm);

    let unmuteMember = message.mentions.members.first() || message.member.id;
    let unmuteUser = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No user was given to unmute!')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!unmuteMember || unmuteMember.id) return message.channel.send(unmuteUser);    
    
    let unmuteSelf = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! You can\'t unmute someone if you haven\'t muted them.')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let unmute = message.guild.member(message.mentions.users.first() || message.member.id);
    if (unmute.id === message.author.id) return message.channel.send(unmuteSelf);

    let unmuteReason =  new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No reason provided!')
        .setDescription('Please provide a reason, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
        let reason = args.slice(1).join(' ');
        if (!reason) return message.channel.send(unmuteReason);


    if (memCheck) {
        member.roles.remove(muteRole);
        member.roles.add(memberRole);
        message.channel.send(`\`${member.user.tag}\` has been unmuted.\nReason: **${reason}**`)
        //console.log('unmuted!'); 
    } else {
        return console.error(error);
    };
}