const VNDB = require('vndb-api')
const vndb = new VNDB('GOR')
const path = require('path')
const fs = require('fs')

class Kino {

    name = "kino"

    async run(message, args) {

        let json = JSON.parse(fs.readFileSync(`./dbs/vns_de_antes_de_2009_sin_porno_gay.json`))
        let randomIdArr = json[Math.floor(Math.random()*json.length)].id.split('v')
        let randomId = parseInt(randomIdArr[1])
        try{
            while(true){
        console.log(randomId)
        let req = await vndb.query(`get vn screens, (id = ${randomId})`)
        let screens = req.items[0].screens
        if(screens.length !== 0) return message.channel.send(screens[Math.floor(Math.random()*screens.length)].image)
        else {
            randomIdArr = json[Math.floor(Math.random()*json.length)].id.split('v')
            randomId = parseInt(randomIdArr[1])
        }
        }

        }catch(e){
            console.log(e)
        }
    }
        
    }

module.exports = Kino