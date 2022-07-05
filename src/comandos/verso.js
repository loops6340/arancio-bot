const axios = require('axios')
const reinaValeraBiblia = "592420522e16049f-01"
const content = "content-type=json&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true&use-org-id=false"
const { MessageEmbed } = require('discord.js');


let config = {
    headers: {
        'api-key': '5a3462ee2b024a231bd574230007c989'
    }
  }

class Verso {

    name = "verso"
    async run (message){
        const request = await axios.get(`https://labs.bible.org/api/?passage=random`, {
            });
        message.channel.send(request.data)

    }
}

module.exports = Verso


