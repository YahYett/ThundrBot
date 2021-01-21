const { MessageEmbed } = require('discord.js');

exports.exec = async function Time(client, message, args, cmd) {
const randomBetween = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const color = [
    randomBetween(0, 255),
    randomBetween(0, 255),
    randomBetween(0, 255)
];
//POSTPONED UNTIL BOT HAS FUNDING
}