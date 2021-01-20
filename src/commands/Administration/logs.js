const { message, MessageEmbed } = require('discord.js')

exports.exec = async function logs(client, message, args, cmd) {
/*     let member = message.member;
    const name = 'logs';
    //logs channel room key: 
    member.guild.roles.create({
        name: 'Admin Key',
        color: '#A59C42',
        permissions: [
            'MANAGE_SERVER'
        ]
    });
    const logKey = member.guild.roles.cache.get('752029758166007849');
    message.guild.channels.create(name, {
        type: 'text',
        permissions: [
            '*'
        ]
    });
    member.roles.add(logKey);
    if (message.channels.type == '') {

    } */

    /* if (message.guild) {
        //message.channel.fetchMessages({ limit: 1 }).then(messages => {
            //const lastmessage = messages.first();
            let msglog = `[CHAT LOG] ${message.author.tag} (\`\`\`${message.author.id}\`\`\`) said: \`\`\`${message.content}\`\`\` in ${message.channel.name}`;
            let msgEmbed = new MessageEmbed()
            .setColor('GRAY')
            .setTitle('[CHAT LOG]')
            .addFields(
                { name: `User: ${message.author.tag}`, value: `ID: \`\`\`${message.author.id}\`\`\`` },
                { name: `Content: \`\`\`${message.content}\`\`\``, value: `Channel: ${message.channel.name}` }
            )
            .setDescription(`User: ${message.author.tag}\nID: \`\`\`${message.author.id}\`\`\`\nContent: \`\`\`${message.content}\`\`\`\nChannel: **${message.channel.name}**`)
            .setFooter(`${client.user.username}`)
            .setTimestamp()
            client.channels.cache.get('799499027665256518').send(msgEmbed);
        //}) 
    } */
}