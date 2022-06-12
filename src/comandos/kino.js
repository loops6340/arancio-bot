const VNDB = require('vndb-api')
const vndb = new VNDB('GOR')
const fs = require('fs')
const { MessageEmbed } = require('discord.js')

class Kino {

    name = "kino"

    async run(message, args) {

        let json = JSON.parse(fs.readFileSync(`./dbs/vns_de_antes_de_2009_sin_porno_gay.json`))
        let randomIdArr = json[Math.floor(Math.random()*json.length)].id.split('v')
        let randomId = parseInt(randomIdArr[1])
        try{
            while(true){
        let req = await vndb.query(`get vn basic,screens, (id = ${randomId})`)
        let screens = req.items[0].screens
        if(screens.length !== 0){
            if(args === 'nsfw'){ 
                screens = req.items[0].screens.filter(s => {
                    if(s.flagging.sexual_avg > 1.5) return s
                })
            }
            else if(args === 'sfw'){
                screens = req.items[0].screens.filter(s => {
                    if(s.flagging.sexual_avg !== 2) return s
                })
            }
            else if(args !== '') message.channel.send('tu argumento es mierda y yo gané el debate. proba con "sfw" o "nsfw". Enviando imagen random sin importar tu sensibilidad.')
            let title = req.items[0].title
            let ogTitle = req.items[0].original
            let releaseDate = req.items[0].released
            let randomImage = screens[Math.floor(Math.random()*screens.length)]
            const embed = new MessageEmbed()
            .setTitle(`${title} - ${ogTitle}`)
            .setURL('https://vndb.org/v' + randomId)
            .addFields(
                { name: 'Fecha de lanzamiento:', value: releaseDate }
            )
            .setImage(randomImage.image)
            if(randomImage.flagging.sexual_avg > 1.5){
                embed.setFooter({ text: 'ASO NO PUEDE VER ESTO', iconURL: 'https://media.discordapp.net/attachments/979663209499856939/985482654411554816/Screenshot_33.png' });
                embed.setColor('RED')
            }
            return message.channel.send({embeds: [embed]})
        } 
        else {
            randomIdArr = json[Math.floor(Math.random()*json.length)].id.split('v')
            randomId = parseInt(randomIdArr[1])
        }
        }

        }catch(e){
            console.log(e)
            message.channel.send('https://searx.tiekoetter.com/image_proxy?url=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hH9GjPiwErLC8J9TJk6V8QHaFX%26pid%3D15.1&h=4bb759adf371cce8bc2141c10eb7182149dba0c1025aa1d35fcb8b9841fa2054')
        }
    }
        
    }

module.exports = Kino