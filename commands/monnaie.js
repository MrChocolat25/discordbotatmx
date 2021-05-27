const Discord = require('discord.js');
const monnaie = require('../monnaie.json');

module.exports.run = async (bot, message, args) => {};
if (!monnaie[message.author.id]) {
    monnaie[mesage.author.id] = {
        monnaie: 0
    };
}

let userMonnaie = monnaie[message.author.id].monnaie;

let userMonnaieEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor('#dc143c')
  .addField('💰', userMonnaie)


  message.channel.send(userMonnaieEmbed);


module.exports.help = {
    name: 'monnaie'
};