const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const mongoCurrency = require("discord-mongo-currency-fork");

const talkedRecently = new Set();

module.exports.run = async (bot, message,) => {
  
  work_list = ['You cleaned your friends house and he gave you some toshi.', 'You cooked sushi for your boss and he gave you some toshi.', 'You won a lottery and got some toshi', 'You made a cake for your girlfriend, she loved it and she gave some toshi as a return']
  var randomWork = work_list[Math.floor(Math.random() * work_list.length)];
  toshi = Math.floor((Math.random() * 10) + 1);

  if (talkedRecently.has(message.author.id)) {
    const cooldown = new Discord.MessageEmbed()
    .setColor('#fccbf4')
    .setTitle('Cooldown')
    .setDescription('You gotta wait for 3 minutes to work again.')
    message.channel.send(cooldown);
  } else {

    // the user can type the command ... your command code goes here :)
    member = `${this.username}`

    await mongoCurrency.giveCoins(message.author.id, message.guild.id, `${toshi}`)
    const embed = new Discord.MessageEmbed()
    .setColor('#fccbf4')
    .setTitle(`${message.author.username}`)
    .setDescription(`${randomWork}`)
    .addFields(
      { name: 'Amount', value: `**${toshi} <:Toshi:853952019160891402>**` },
    )
    message.channel.send(embed);

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
    }, 180000);
  }

}

module.exports.config = {
  name: "work",
  aliases: ['w']
}