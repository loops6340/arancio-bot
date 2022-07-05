const axios = require('axios')
const { 
    literalmenteAso, 
    literalmenteGor, 
    literalmenteHola, 
    literalmenteLac, 
    literalmenteLoops, 
    literalmenteMeiggs,
    literalmenteNum,
    literalmenteVenom,
    literalmenteZerhin
} = require('../literalmente')

class Literalmente {

    name = "literalmente"

    async run(message, args) {
        if(args === "aso"){
            const request = await axios.get(literalmenteAso[Math.floor(Math.random()*literalmenteAso.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "zerhin"){
            const request = await axios.get(literalmenteZerhin[Math.floor(Math.random()*literalmenteZerhin.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "hola"){
            const request = await axios.get(literalmenteHola[Math.floor(Math.random()*literalmenteHola.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "venom"){
            const request = await axios.get(literalmenteVenom[Math.floor(Math.random()*literalmenteVenom.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "meiggs"){
            const request = await axios.get(literalmenteMeiggs[Math.floor(Math.random()*literalmenteMeiggs.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "gor"){
            const request = await axios.get(literalmenteGor[Math.floor(Math.random()*literalmenteGor.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "loops"){
              const request = await axios.get(literalmenteLoops[Math.floor(Math.random()*literalmenteLoops.length)]);
              const imagenRandom = await request.data.file_url
              if(imagenRandom === undefined){
                message.channel.send("INTENTALO DE NUEVO XD")
                return
              }
              else{
            message.channel.send(imagenRandom)
                
 }         }
          else if(args === "lac"){
            const indexRandom = literalmenteLac[Math.floor(Math.random()*literalmenteLac.length)]
            const request = await axios.get(indexRandom);
            if(indexRandom === literalmenteLac[2]){
              const gifardo = request.data.results[0].url
              message.channel.send(gifardo)
            }
            else if(request.data === undefined){
              message.channel.send("INTENTALO DE NUEVO XD")
              return
            }
            else{
              const imagenRandom = await request.data.file_url
              message.channel.send(imagenRandom)
           }
        }
        else if(args === "num"){
          const indexRandom = literalmenteNum[Math.floor(Math.random()*literalmenteNum.length)]
          const request = await axios.get(indexRandom);
          if(indexRandom === literalmenteNum[12]){
            const gifardo = request.data.results[0].url
            message.channel.send(gifardo)
            }
          else if(request.data === undefined){
            message.channel.send("INTENTALO DE NUEVO XD")
            return
          }
          else{
            const imagenRandom = await request.data.file_url    
            message.channel.send(imagenRandom)
         }
      } else {
          message.channel.send("ESE GILIPOLLAS NO XD")
      }
    }
}

module.exports = Literalmente