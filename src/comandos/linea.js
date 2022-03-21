const fs = require("fs");
const axios = require("axios")
const { MessageAttachment } = require('discord.js')
const Canvas = require('canvas')
class Linea {

    name = "linea"

    async run(message) {
        let lineas = [];
        fs.readFile("./src/logs/asd.txt", "utf-8", function(err, data){
            if(err) {
                throw err;
            }
            var lines = data.split('\n');
            let line;
            let fraseYLinea;
            let frase;
            for(let i = 0; i < 4; i++){
                line = lines[Math.floor(Math.random()*lines.length)]
                fraseYLinea = line.split(": ")
                frase = fraseYLinea[1]
                lineas.push(frase)
                console.log(lineas)
            }
        })
        const canvas = Canvas.createCanvas(850, 638);
		const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://i.imgur.com/BMwd1nS.png');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.font = '12px arial';
        context.fillStyle = '#000000';
        context.fillText(lineas[0], 8, 244);
        context.fillText(lineas[1], 443, 267);
        context.fillText(lineas[2], 15, 584);
        context.fillText(lineas[3], 437, 582);
        const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        message.channel.send({ files: [attachment] });
        }
}
module.exports = Linea