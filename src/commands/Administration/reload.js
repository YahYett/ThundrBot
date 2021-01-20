const { Message, message, MessageEmbed, MessageFlags } = require('discord.js')

exports.exec = async function Offline(client, message, args, cmd) {
    const noPerms = message.member.hasPermission('MANAGE_MESSAGES');
    if (noPerms) {
        let nopermEmbed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Error! You are missing the following permissions:')
            .setDescription('\`\`\`MANAGE_MESSAGES\`\`\`')
            .setThumbnail('https://i.imgur.com/dOXV3cv.gif')
            .setAuthor(`${message.author.tag}`)
            .setTimestamp()
        return message.channel.send(nopermEmbed);
    }
    let mssg = await message.channel.send('Restart requested. Running request...');
    message.channel.send('Restarting in 5...').then(msg => {
        setTimeout(function() {
            mssg.channel.send('Restarting in 4...').then(msg => {
                setTimeout(function() {
                    mssg.channel.send('Restarting in 3...').then(msg => {
                        setTimeout(function() {
                            mssg.channel.send('Restarting in 2...').then(msg => {
                                setTimeout(function() {
                                    mssg.channel.send('Restarting in 1...').then(msg => {
                                        setTimeout(async function() {
                                            let mg = await mssg.channel.send('Restarting...');
                                            client.destroy();
                                            client.login(process.env.TOKEN);
                                            let roundTrip = (mg.createdTimestamp - message.createdTimestamp)/1000;
                                            message.channel.send(`Restarted! Took \`${roundTrip}s\``);
                                            mg.delete(mg);
                                        }, 1000);
                                    })
                                }, 1000);
                            })     
                        }, 1000);
                    })
                }, 1000);
            })
        }, 1000);
    })   
}