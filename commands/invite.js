const ms = require('ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const db = require('quick.db')

    const config = require(`../config/bot.js`)

    let language = db.fetch(`lang_${message.guild.id}`)

    if (language === null) language = config.basiclang

    const lang = require(`../lang/${language}.js`)

    const help = new Discord.MessageEmbed()
    .setAuthor(lang.invite.title)
    .setThumbnail(client.user.displayAvatarURL())
    .addField(lang.invite.text, lang.invite.description + "** **" + `[${lang.invite.clickhere}](https://discordapp.com/oauth2/authorize?client_id=${config.idbot}&scope=bot&permissions=${config.auth.dperms})` + ".")
    .addField(lang.invite.text2, lang.invite.server + "** **" + `[${lang.invite.clickhere}](${config.auth.support})` + ".")
    .setFooter(config.embeds.footers)
    .setColor(config.embeds.color)

    message.channel.send(help)
}