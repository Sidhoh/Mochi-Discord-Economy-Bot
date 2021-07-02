const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#fccbf4')
    .setTitle(`Help`)
    .setDescription(`My prefix is **!**, List of commands:`)
    .addFields(
      { name: 'Economy', value: `work,balance,deposit,withdraw,give` },
    )
    .setTimestamp()
    .setFooter('use ! before each command!. Still under development')
    message.channel.send(embed);

  }
  
  module.exports.config = {
    name: "help",
    aliases: []
  }

  