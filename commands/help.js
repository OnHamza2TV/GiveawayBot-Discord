const ms = require('ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const db = require('quick.db')

    const config = require(`../config/bot.js`)

    let language = db.fetch(`lang_${message.guild.id}`)

    if (language === null) language = config.basiclang

    const lang = require(`../lang/${language}.js`)

    const help = new Discord.MessageEmbed()
    .setAuthor(lang.help.title)
    .setThumbnail(message.author.avatarURL())
    .setDescription(lang.help.description)
    .addField(lang.help.start(message), lang.help.startdescription(message))
    .addField(lang.help.end(message), lang.help.enddescription(message))
    .addField(lang.help.reroll(message), lang.help.rerolldescription(message))
    .addField(lang.help.edit(message), lang.help.editdescription(message))
    .addField(lang.help.lang(message), lang.help.langdescription(message))
    .addField(lang.help.set(message), lang.help.setdescription(message))
    .addField(lang.help.invite(message), lang.help.invitedescription(message))
    .setFooter(config.embeds.footers)
    .setColor(config.embeds.color)

    message.channel.send(help)
}
