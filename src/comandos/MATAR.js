const { MessageEmbed } = require('discord.js')

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


class Matar {

    name = "MATAR"

    constructor({ client, bot }) {
      this.client = client
      this.bot = bot
    }

    async run(message, args) {
        if(message.mentions.members.size > 0){
            
            const [primerArgumento] = args.split(' ')
            const mentionRegExp = /<@!*&*[0-9]+>/
            const esDesgraciado = (str) => mentionRegExp.test(str)

            if (!esDesgraciado(primerArgumento)) return message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD DIME A QUIEN ASESINAR`)
            
            const desgraciadoYCausaDeMuerte = args.split(/(\s+)/);
            console.log(desgraciadoYCausaDeMuerte)
            const desgraciado = desgraciadoYCausaDeMuerte[0]
            desgraciadoYCausaDeMuerte.shift()
            desgraciadoYCausaDeMuerte.shift()
            const causaDeMuerte = desgraciadoYCausaDeMuerte.join("")
            if (causaDeMuerte === ""){
              message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`);
            }
            const unomismo = `<@!${message.author.id}>`
            const embedMatando = new MessageEmbed()
            .setDescription('VALE TIO COMO TU DIGAS')
            .setImage('https://c.tenor.com/0AEB38Hz1PMAAAAC/death-note-light.gif')
            const embedMuertoBot = new MessageEmbed()
            .setDescription(`${message.author} HA SIDO DESPEDAZADO BRUTALMENTE POR INTENTAR DESAFIAR AL DIOS DEL NUEVO MUNDO.`)
            .setImage('https://c.tenor.com/TaIzFEOO05MAAAAC/death-note-kira.gif')
            const embedMuerto = new MessageEmbed()
            .setDescription(`${desgraciado} HA SIDO ${causaDeMuerte}.`)
            .setImage('https://c.tenor.com/4LmyhIwaSpMAAAAd/death-note-kira.gif')
          if(desgraciado === this.bot.tag){
            message.channel.send({ embeds: [embedMatando] });
            await sleep(40000);
            message.channel.send({ embeds: [embedMuertoBot] });
          }
          else if(desgraciado === unomismo){
            message.channel.send(`no tio, no te tienes que hacer esto de verdad eres la polla con beceboya xD`)
          }
          else{
            message.channel.send({ embeds: [embedMatando] });
            await sleep(40000);
            message.channel.send({ embeds: [embedMuerto] });
        }}
        else{
          message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`);
        }
    }
}

module.exports = Matar