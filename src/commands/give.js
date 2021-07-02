const mongoCurrency = require('discord-mongo-currency-fork');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.member;

  const user = await mongoCurrency.findUser(message.author.id, message.guild.id);

  if(user.coinsInWallet === 0)
  {
    console.log('Failed');
  }
  else{
    console.log('Passed');

    await mongoCurrency.giveCoins(member.id, message.guild.id, `${args[1]}`)
    await mongoCurrency.deductCoins(message.author.id, message.guild.id, `${args[1]}`)
  

    const embed = new Discord.MessageEmbed()
    .setColor('#fccbf4')
    .setTitle(`Transfer Complete`)
    .setDescription(`You gave ${args[1]} <:Toshi:853952019160891402> to ${member} `);
  
    message.channel.send(embed);

    }

}

module.exports.config = {
  name: "give",
  aliases: ['gib']
}
