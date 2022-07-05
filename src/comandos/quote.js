const { MessageEmbed } = require("discord.js")
const { libros } = require("../libros.js")

class Quote {

    name = "quote"

    run(message) {
        const libroRandom = libros[Math.floor(Math.random()*libros.length)]
        const fraseRandom = libroRandom.frases[Math.floor(Math.random()*libroRandom.frases.length)]
        const embedFrase = new MessageEmbed()
          .setColor('RANDOM')
          .setTitle(libroRandom.titulo)
          .setAuthor({ name: libroRandom.autor, iconURL: libroRandom.foto })
          .setDescription(`"${fraseRandom}"`)
          .setFooter({ text: libroRandom.fecha})
          message.channel.send({ embeds: [embedFrase] });
    }
}

module.exports = Quote