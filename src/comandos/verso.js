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
        const requestLibros = await axios.get(`https://api.scripture.api.bible/v1/bibles/${reinaValeraBiblia}/books`, config, {
            });
        const libros = requestLibros.data.data
        const libroRandomId = libros[Math.floor(Math.random()*libros.length)].id;
        const requestCapitulos = await axios.get(`https://api.scripture.api.bible/v1/bibles/${reinaValeraBiblia}/books/${libroRandomId}/chapters`, config, {
            })
        const capitulos = requestCapitulos.data.data
        const capituloRandomId = capitulos[Math.floor(Math.random()*capitulos.length)].id;
        const requestVersos = await axios.get(`https://api.scripture.api.bible/v1/bibles/${reinaValeraBiblia}/chapters/${capituloRandomId}/verses`, config, {
            })
        const versos = requestVersos.data.data
        const versoRandomId = versos[Math.floor(Math.random()*capitulos.length)].id;
        const requestVerso = await axios.get(`https://api.scripture.api.bible/v1/bibles/${reinaValeraBiblia}/verses/${versoRandomId}?${content}`, config, {
            })
        const versoRandomInfo = requestVerso.data.data
        const referencia = versoRandomInfo.reference
        const verso = versoRandomInfo.content[0].items[1].items[0].text
        const predica = `${referencia} ${verso}`
        message.channel.send(predica)

    }
}

module.exports = Verso


