const axios = require('axios')

class Kinocg {
    name = "kinocg"
    async run(message){

        let danbooruReq = await axios.get('https://danbooru.donmai.us/posts/random.json?tags=game_cg+age%3A%3E10year+-%28rating%3Aexplicit%29')

        const {large_file_url, tag_string_character, tag_string_copyright} = danbooruReq.data

        if(!large_file_url) return message.channel.send('error lol')

        const splitAndCap = (stringP) => {
            if(!stringP) return ""
            let split = stringP.split('_')
                let string = ''
                split.forEach(p => {
                    string +=  p[0].toUpperCase() + p.substr(1) + " "
                })
                return string
        }

        message.channel.send(`${splitAndCap(tag_string_character)} - ${splitAndCap(tag_string_copyright)} ${large_file_url}`)

    }
}

module.exports = Kinocg