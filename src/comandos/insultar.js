const insultos = ["ESTE ES TU FIN", "SI HUBIERA CP DE UN VIDEO TUYO LA VERDAD ME MASTURBARIA VIENDOLO", "TE VOY A MUTILAR", "<<<<<<<<<<<<<<<<<<<<<<< ESTE USUARIO PUBLICA GORE DECAPITACIONES Y PEDOFILIA", "PUTO IMBECIL XD TIO DE VERDAD OJALA TE MUERAS (EN LA VIDA REAL)", "GILIPOLLAS", "NEGRO DE MIERDA", "ES UN BOLUDO UN FORRO UN SORETE UN MALNACIDO UN SOPENCO UN PELOTUDO UN IDIOTA UN IMBECIL UN GORDO UN CHUPAPIJA UN RECHUPAVERGA UN"]

class Insultar {

    name = "insultar"

    constructor({ client, bot }) {
        this.client = client
        this.bot = bot
    }

    run(message, args) {
        if(message.mentions.members.size > 0){
            const desgraciado = args
            const unomismo = `<@!${message.author.id}>`
            if(desgraciado === this.bot.tag){
              message.channel.send("no molestes");
            }
            else if(desgraciado === unomismo){
              message.channel.send(`no tio, no te tienes que hacer esto de verdad eres la polla con beceboya xD`)
            }
            else{
              message.channel.send(`${desgraciado} ${insultos[Math.floor(Math.random()*insultos.length)]}`);
          }}
          else{
            message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`);
          }
    }
}

module.exports = Insultar