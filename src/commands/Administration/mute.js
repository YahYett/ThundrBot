const { Message, message, MessageEmbed, MessageFlags } = require('discord.js');
const ms = require('ms');


exports.exec = async function Mute(client, message, args, cmd) {
    let muteperm = message.member.hasPermission('MUTE_MEMBERS');
    let muteperms = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`Error! Missing permission: MUTE_MEMBERS`)
        .setDescription('Please update your permissions, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!muteperm) return message.channel.send(muteperms);

    let mutePerson = message.mentions.members.first();
    let muteuser = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No user was given to mute!')
        .setDescription('Mention them using **@tag**')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    if (!mutePerson) return message.channel.send(muteuser);

    let muteyourself = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! You cannot mute yourself!')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
        .setFooter('Seriously, are you trying to commit a crime or something?')
    let mute = message.guild.member(message.mentions.users.first());
    if (mute === message.author.id) return message.channel.send(muteyourself);
        
    let mutereason = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Error! No reason provided!')
        .setDescription('Please provide a reason, and try again.')
        .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
        .setAuthor(`${message.author.tag}`)
        .setTimestamp()
    let reason = args.slice(2).join(` `);
    if (!reason) return message.channel.send(mutereason);

    //mute role: 751240121604636722
    let guild = '739718030451277835';
 
    let muteTimer = args[1];
    if (!args[1] && !args[2]) {
        muteTimer = args[1];
        reason = 'Unspecified';
        return;
    }

    if (!muteTimer) {
        let noTimer = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! No duration provided.')
            .setDescription('Please provide a mute duration, and try again.\ni.e. **1ms, 2s, 3m, 4h, 5y**.')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        return message.channel.send(noTimer);
    }
    console.log(message.member.id);
    console.log(message.member.user.tag);
    console.log(args[2]);
    console.log(args[0]);
    try {
        let MemberHasRole = message.member.roles.cache.has(message.guild.roles.cache.get('705521564518449192'));
        //let memberRole = member.guild.roles.cache.find(role => role.name === 'Member');
        if (!MemberHasRole) {
            //two servers' Mute role ids
            //Strife:
            const muteID = message.guild.roles.cache.get('705521564518449192');
            //Dev Cave:
            const muteID2 = message.guild.roles.cache.get('751240121604636722');
            if (mutePerson.roles.cache.has(muteID)) {
                let selfmuteEmbed = new MessageEmbed()
                    .setColor('YELLOW')
                    .setTitle('Error! No duration provided.')
                    .setDescription('Please provide a mute duration, and try again.\ni.e. **1ms, 2s, 3m, 4h, 5y**.')
                    .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
                    .setAuthor(`${message.author.tag}`)
                    .setTimestamp()
                return message.channel.send(selfmuteEmbed);
            };
            //must be muteperson to work.
            mutePerson.roles.add(muteID);
            //member.roles.remove(memberRole);
            let muteYes = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Success! ${args[0]} has been muted!`)//${message.member.user.tag || message.member.id}  has been muted!`)
            .setDescription(`Muted by: ${message.author.tag}\nReason: **${reason}**\nDuration: **${ms(muteTimer)}**`) //BUG with arg values, currently only one "reason" arg is alllowed.
            .setThumbnail('https://i.imgur.com/KAMsDYd.png')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()

        let expTime = 'Mute Duration Timeout.'

        setTimeout(function() {
        //let memberRole = member.guild.roles.cache.find(role => role.name === 'Member');
        //member.roles.add(memberRole);
        mutePerson.roles.remove(muteID);
        let unmuteEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Auto-Unmute!`)
            .setDescription(`User: \`${message.member.user.tag}\`\nReason: **${expTime}**`)
            .setThumbnail('https://i.imgur.com/KAMsDYd.png')
            .setTimestamp()
        message.channel.send(unmuteEmbed);
        }, ms(muteTimer, {
            long: true,
        }));
            return message.channel.send(muteYes);
        } else {
            console.log('Not Muted');
        };
    } catch (e) {
        if (e) {
            console.error(e);
        }
    }
}