const { MessageAttachment } = require('discord.js')
const Canvas = require('canvas')
class Devorar {

    name = "devorar"

    async run(message, args) {
        if(message.mentions.members.size <= 0) return message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`)
        const [primerArgumento] = args.split(' ')
        const mentionRegExp = /<@!*&*[0-9]+>/
        const esDesgraciado = (str) => mentionRegExp.test(str)
        if (!esDesgraciado(primerArgumento)) return message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD DIME A QUIEN DEVORAR`)
        const desgraciado = message.mentions.members.first();
        const canvas = Canvas.createCanvas(548, 473);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/941222420625358879/941239661853024256/FB_IMG_1625793045511.png');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(desgraciado.displayAvatarURL({ format: 'jpg' }));
        context.drawImage(avatar, 383, 89, 100, 100);
        const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        message.channel.send({ files: [attachment] });
    }    
}

module.exports = Devorar