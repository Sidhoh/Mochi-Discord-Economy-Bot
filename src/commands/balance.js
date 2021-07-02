const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.member;
 
  const user = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.

  const embed = new Discord.MessageEmbed()
  .setColor('#fccbf4')
  .setTitle(`${member.user.username}'s Balance`)
  .setDescription(`Wallet: ${user.coinsInWallet} <:Toshi:853952019160891402>\nBank: ${user.coinsInBank} <:Toshi:853952019160891402>`);
  
  message.channel.send(embed);
}

module.exports.config = {
  name: "balance",
  aliases: ['bal']
}
