const { default: axios } = require("axios")
const DiscordJS = require("discord.js")
const { libros } = require("./libros.js")
require("dotenv").config()
require("./libros.js")
const imagenesDoxxeo = ["https://cdn.discordapp.com/attachments/924175007494569984/948444002775105556/gosling.jpg", "https://media.discordapp.net/attachments/684197130801512469/873448820548173886/FB_IMG_1625793045511.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443507390050314/thanos.0.jpeg", "https://cdn.discordapp.com/attachments/924175007494569984/948443536880205924/Troll_face.png", "https://media.discordapp.net/attachments/684197130801512469/873450402463498240/trejo11.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443366927007824/big_knuckknuck.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443266087522355/24448_Pulp-Fiction-reestreno-espana-cines.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948443242972729344/poison.png","https://cdn.discordapp.com/attachments/924175007494569984/948443123430883398/1522543437757.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948443024923447326/Joker-790658206-large.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442948670996480/goodfellas.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442901074047047/Fullenght.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442855867834368/frost.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442827363323914/FLl8NnTaMAI2NYf.jpg", "https://media.discordapp.net/attachments/552168964076208143/718961911890444298/IMG_20200605_011506.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442703920762950/e23c2f2b418bbab27b239d67ae6ddc31.png", "http://pm1.narvii.com/6207/d114704ab345a911e3e8a59c7e11840c27d16cdd_00.jpg", "https://lastfm.freetls.fastly.net/i/u/500x500/01cb72e57c87fa4dfecbec94cf3c5c82.jpg", "https://media.revistagq.com/photos/5ca6057e071fbf7b7b71aaa8/16:9/w_1280,c_limit/tyler_durden_2602.jpg", "https://assets-global.website-files.com/605a3cacba514a77ca2e6ab5/60c21dae537b04cf56271def_drive-2.jpg", "https://media.vozpopuli.com/2021/02/caracterizacion-Patrick-Bateman-Mary-Harron_896920346_1372092_1020x574.jpg", "https://i.ytimg.com/vi/fiBLgEx6svA/maxresdefault.jpg", "https://gcdn.lanetaneta.com/wp-content/uploads/2022/01/1641108913_La-estrella-de-Impractical-Jokers-Joe-Gatto-anuncia-su-salida.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/04/95797-trollface.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948441609786253322/CR_967926_f20505bf0d4242c0b587873e6ef6f768_tecnologia_thumb_fb.png", "https://cdn.discordapp.com/attachments/924175007494569984/948441598872682546/1639109873075.jpg", "https://media.discordapp.net/attachments/924175007494569984/948441784567103498/unknown.png", "https://media.discordapp.net/attachments/684115741133242369/752344986594574336/sk997k5zlpd11.png", "https://media.discordapp.net/attachments/684115741133242369/747307911730036776/1598235013801.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442302781751326/1645135124086.png", "https://cdni.rt.com/actualidad/public_images/2016.08/article/57bee01ec461888a0d8b4567.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442457308299304/aso.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442514665381890/breaking_bad_vince_gilligan_amc.webp"]


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
  client.user.setActivity('GORE.', { type: 'WATCHING' });
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
        const libroRandom = libros[Math.floor(Math.random()*libros.length)]
        const fraseRandom = libroRandom.frases[Math.floor(Math.random()*libroRandom.frases.length)]
        const embedFrase = new DiscordJS.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(libroRandom.titulo)
          .setAuthor({ name: libroRandom.autor, iconURL: libroRandom.foto })
          .setDescription(`"${fraseRandom}"`)
          .setFooter({ text: libroRandom.fecha})
          message.channel.send({ embeds: [embedFrase] });
        }
        else if (command === "dolar") {
          const request = await axios.get(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`);
          const dataDolar = await request.data[1].casa;
          const dolarCompra = await dataDolar.compra;
          const dolarVenta = await dataDolar.venta;
          message.channel.send(`PRECIO DEL DOLAR HOY
COMPRA: ${dolarCompra} PESOS
VENTA: ${dolarVenta} PESOS
GRAN PAIS XD`)
        }
        else if(command === "ayudamierda"){
          message.channel.send(`COMANDOS DISPONIBLES:
PREFIJO: ${bot.prefix} (COMO GURA)
ayudamierda: MUESTRA ESTA PORQUERIA.
ASOPLATA: EXPRESA LA SED DE SANGRE DE ASOPLATA POR MATAR AL DESGRACIADO.
doxxear (IP): RECIBE COMO ARGUMENTO UNA IP Y HACE ALGO CHISTOSO.
quote: FRASE RANDOM DE UN LIBRO DE UNA METICULOSA SELECCION REALIZADA POR EL INTELECTUAL EQUIPO DE DESARROLLO DETRÁS DE ESTE PROGRAMA.
dolar: MUESTRA EL PRECIO DEL DOLAR HOY EN ARGENTINA.`)
        }
        else {
          message.channel.send("?????????????????????????? OK GILIPOLLAS XD")
      }
  }
})


client.login(process.env.TOKEN)

