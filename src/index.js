const { default: axios } = require("axios")
const DiscordJS = require("discord.js")
require("dotenv").config()


const imagenesDoxxeo = ["https://lastfm.freetls.fastly.net/i/u/500x500/01cb72e57c87fa4dfecbec94cf3c5c82.jpg", "https://media.revistagq.com/photos/5ca6057e071fbf7b7b71aaa8/16:9/w_1280,c_limit/tyler_durden_2602.jpg", "https://assets-global.website-files.com/605a3cacba514a77ca2e6ab5/60c21dae537b04cf56271def_drive-2.jpg", "https://media.vozpopuli.com/2021/02/caracterizacion-Patrick-Bateman-Mary-Harron_896920346_1372092_1020x574.jpg", "https://i.ytimg.com/vi/fiBLgEx6svA/maxresdefault.jpg", "https://gcdn.lanetaneta.com/wp-content/uploads/2022/01/1641108913_La-estrella-de-Impractical-Jokers-Joe-Gatto-anuncia-su-salida.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/04/95797-trollface.jpg"]


const client = new DiscordJS.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

let bot = {
  client,
  prefix: "a!",
  owners:["878054504510140416", "944015076854235136", "254821213573087232"]
}

client.on('ready', () => {
  console.log("HOLA CABRONES XD HIJOS DE SUS PUTAS MADRES")
})

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(bot.prefix)) {
      const command = message.content.slice(bot.prefix.length).split(" ")[0];
      console.log(command)
      const args = message.content.slice(bot.prefix.length).split(" ")[1];
      console.log(args)
      if (command === "ASOPLATA") {
          message.channel.send("MATAR AL DESGRACIADO XD")
      } else if (command === "doxxear") {
          const ip = args;
          const request = await axios.get(`http://ip-api.com/json/${ip}`);
          const dataIp = await request.data;
          if (dataIp.status !== "success") {
              message.channel.send("OE MIERDA DAME UNA IP VALIDA .l.")
          } else {
              (axios.post('https://api.memegen.link/templates/custom', {
                  "background": imagenesDoxxeo[Math.floor(Math.random() * imagenesDoxxeo.length)], //IMAGEN DEL MOMAZO :V
                  "text": [ip, dataIp.country + " " + dataIp.city], ///MOSTRAR IP, PAIS Y CIUDAD EN EL MOMICHI
                  "font": "impact" ///FUENTE KINO
              }))
              .then(function(response) {
                  message.channel.send(response.data.url)
                  message.channel.send(`https://www.google.com/maps/@${dataIp.lat},${dataIp.lon},21z`)
              });
          }
      } else if (command === "quote") {
        
      } else {
          message.channel.send("?????????????????????????? OK GILIPOLLAS XD")
      }
  }
})


client.login(process.env.TOKEN)

