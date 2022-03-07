const { default: axios } = require("axios")
const DiscordJS = require("discord.js")
const { Permissions } = require("discord.js")
const { libros } = require("./libros.js")
const Twitter = require ('twitter')
require("dotenv").config()
require("./libros.js")


const imagenesDoxxeo = ["https://cdn.discordapp.com/attachments/924175007494569984/948444002775105556/gosling.jpg", "https://media.discordapp.net/attachments/684197130801512469/873448820548173886/FB_IMG_1625793045511.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443507390050314/thanos.0.jpeg", "https://cdn.discordapp.com/attachments/924175007494569984/948443536880205924/Troll_face.png", "https://media.discordapp.net/attachments/684197130801512469/873450402463498240/trejo11.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443366927007824/big_knuckknuck.png", "https://cdn.discordapp.com/attachments/924175007494569984/948443266087522355/24448_Pulp-Fiction-reestreno-espana-cines.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948443242972729344/poison.png","https://cdn.discordapp.com/attachments/924175007494569984/948443123430883398/1522543437757.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948443024923447326/Joker-790658206-large.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442948670996480/goodfellas.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442901074047047/Fullenght.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442855867834368/frost.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442827363323914/FLl8NnTaMAI2NYf.jpg", "https://media.discordapp.net/attachments/552168964076208143/718961911890444298/IMG_20200605_011506.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442703920762950/e23c2f2b418bbab27b239d67ae6ddc31.png", "http://pm1.narvii.com/6207/d114704ab345a911e3e8a59c7e11840c27d16cdd_00.jpg", "https://lastfm.freetls.fastly.net/i/u/500x500/01cb72e57c87fa4dfecbec94cf3c5c82.jpg", "https://media.revistagq.com/photos/5ca6057e071fbf7b7b71aaa8/16:9/w_1280,c_limit/tyler_durden_2602.jpg", "https://assets-global.website-files.com/605a3cacba514a77ca2e6ab5/60c21dae537b04cf56271def_drive-2.jpg", "https://media.vozpopuli.com/2021/02/caracterizacion-Patrick-Bateman-Mary-Harron_896920346_1372092_1020x574.jpg", "https://i.ytimg.com/vi/fiBLgEx6svA/maxresdefault.jpg", "https://gcdn.lanetaneta.com/wp-content/uploads/2022/01/1641108913_La-estrella-de-Impractical-Jokers-Joe-Gatto-anuncia-su-salida.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/04/95797-trollface.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948441609786253322/CR_967926_f20505bf0d4242c0b587873e6ef6f768_tecnologia_thumb_fb.png", "https://cdn.discordapp.com/attachments/924175007494569984/948441598872682546/1639109873075.jpg", "https://media.discordapp.net/attachments/924175007494569984/948441784567103498/unknown.png", "https://media.discordapp.net/attachments/684115741133242369/752344986594574336/sk997k5zlpd11.png", "https://media.discordapp.net/attachments/684115741133242369/747307911730036776/1598235013801.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442302781751326/1645135124086.png", "https://cdni.rt.com/actualidad/public_images/2016.08/article/57bee01ec461888a0d8b4567.jpg", "https://cdn.discordapp.com/attachments/924175007494569984/948442457308299304/aso.png", "https://cdn.discordapp.com/attachments/924175007494569984/948442514665381890/breaking_bad_vince_gilligan_amc.webp"]
const danbooruRandom = "https://danbooru.donmai.us/posts/random.json?"
const danbooruSafe = "+rating:safe"


const literalmenteAso = [`${danbooruRandom}tags=m200_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=hatoba_tsugu${danbooruSafe}`, `${danbooruRandom}tags=nagato_yuki${danbooruSafe}`, `${danbooruRandom}tags=okita_souji_(fate)${danbooruSafe}`, `${danbooruRandom}tags=hisui_(tsukihime)${danbooruSafe}`, `${danbooruRandom}tags=oda_nobunaga_(fate)${danbooruSafe}`, `${danbooruRandom}tags=nazrin${danbooruSafe}`, `${danbooruRandom}tags=bernadetta_von_varley${danbooruSafe}`, `${danbooruRandom}tags=ryougi_shiki${danbooruSafe}`]
const literalmenteZerhin = [`${danbooruRandom}tags=anchovy_(girls_und_panzer)${danbooruSafe}`, `${danbooruRandom}tags=satanichia_kurumizawa_mcdowell${danbooruSafe}`, `${danbooruRandom}tags=m14_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=s.a.t.8_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=super-shorty_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=usada_hikaru${danbooruSafe}`, `${danbooruRandom}tags=shiki_eiki${danbooruSafe}`, `${danbooruRandom}tags=el_condor_pasa_(umamusume)${danbooruSafe}`, `${danbooruRandom}tags=tressa_(octopath_traveler)${danbooruSafe}`]
const literalmenteHola = [`${danbooruRandom}tags=kuroki_tomoko${danbooruSafe}`, `${danbooruRandom}tags=kaname_madoka${danbooruSafe}`, `${danbooruRandom}tags=yumemi_riamu${danbooruSafe}`, `${danbooruRandom}tags=ohara_mari${danbooruSafe}`, `${danbooruRandom}tags=majima_gorou${danbooruSafe}` ]
const literalmenteVenom = [`${danbooruRandom}tags=aisaka_taiga${danbooruSafe}`]
const literalmenteMeiggs = [`${danbooruRandom}tags=nekomata_okayu${danbooruSafe}`]
const literalmenteGor = [`${danbooruRandom}tags=louise_francoise_le_blanc_de_la_valliere${danbooruSafe}`, `${danbooruRandom}tags=mitsurugi_meiya${danbooruSafe}`, `${danbooruRandom}tags=mima_(touhou)${danbooruSafe}`, `${danbooruRandom}tags=kohaku_(tsukihime)${danbooruSafe}`, `${danbooruRandom}tags=dai_mahou_touge${danbooruSafe}`, `${danbooruRandom}tags=m16a1_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=dejiko${danbooruSafe}`, `${danbooruRandom}tags=negev_(girls'_frontline)${danbooruSafe}`, `${danbooruRandom}tags=yanfei_(genshin_impact)${danbooruSafe}`, `${danbooruRandom}tags=vanilla_h${danbooruSafe}`, `${danbooruRandom}tags=saya_(saya_no_uta)${danbooruSafe}`, `${danbooruRandom}tags=fubuki_(one-punch_man)${danbooruSafe}`, `${danbooruRandom}tags=char_aznable${danbooruSafe}`, `${danbooruRandom}tags=kanye_west${danbooruSafe}`]
const literalmenteLoops = [`${danbooruRandom}tags=kirigiri_kyouko${danbooruSafe}`, `${danbooruRandom}tags=nanami_chiaki${danbooruSafe}`, `${danbooruRandom}tags=lelouch${danbooruSafe}`]
const literalmenteLac = [`${danbooruRandom}tags=al_azif${danbooruSafe}`, `${danbooruRandom}tags=noelle_(genshin_impact)${danbooruSafe}`, `https://g.tenor.com/v1/random?q=super%20robot%20wars&key=RL591LH7DHMW&limit=1`]
const literalmenteNum = [`${danbooruRandom}tags=akemi_homura${danbooruSafe}`, `${danbooruRandom}tags=yoshikawa_chinatsu${danbooruSafe}`, `${danbooruRandom}tags=senko_(sewayaki_kitsune_no_senko-san)${danbooruSafe}`, `${danbooruRandom}tags=chieru_(princess_connect!)${danbooruSafe}`, `${danbooruRandom}tags=hoshizora_miyuki${danbooruSafe}`, `${danbooruRandom}tags=rosehip_(girls_und_panzer)${danbooruSafe}`, `${danbooruRandom}tags=dante_(devil_may_cry)${danbooruSafe}`, `${danbooruRandom}tags=char_aznable${danbooruSafe}`, `${danbooruRandom}tags=uchiha_itachi${danbooruSafe}`, `${danbooruRandom}tags=yoshikawa_chinatsu${danbooruSafe}`, `${danbooruRandom}tags=nakano_azusa${danbooruSafe}`, `${danbooruRandom}tags=godot_(ace_attorney)${danbooruSafe}`, `https://g.tenor.com/v1/random?q=mobile%20suit%20gundam&key=RL591LH7DHMW&limit=1`, `${danbooruRandom}tags=ryuk${danbooruSafe}`]

const insultos = ["ESTE ES TU FIN", "SI HUBIERA CP DE UN VIDEO TUYO LA VERDAD ME MASTURBARIA VIENDOLO", "TE VOY A MUTILAR", "<<<<<<<<<<<<<<<<<<<<<<< ESTE USUARIO PUBLICA GORE DECAPITACIONES Y PEDOFILIA", "PUTO IMBECIL XD TIO DE VERDAD OJALA TE MUERAS (EN LA VIDA REAL)", "GILIPOLLAS", "NEGRO DE MIERDA", "ES UN BOLUDO UN FORRO UN SORETE UN MALNACIDO UN SOPENCO UN PELOTUDO UN IDIOTA UN IMBECIL UN GORDO UN CHUPAPIJA UN RECHUPAVERGA UN"]

const client = new DiscordJS.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

var twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


let bot = {
  client,
  prefix: "a!",
  owners:["878054504510140416", "944015076854235136", "254821213573087232"],
  tag: "<@!947306117527142410>"
}
client.on('ready', () => {
  console.log("HOLA CABRONES XD HIJOS DE SUS PUTAS MADRES")
  client.user.setActivity('GORE.', { type: 'WATCHING' });
})


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}





client.on('messageCreate', async (message) => {
  function literalCagada(){
    message.channel.send("OK TIO LA CAGUE ESTA VEZ JODER DE VERDAD LO SIENTO");
    message.channel.send("MI FIN");
    message.channel.send("ADIOS");
  }
  let guild = message.guild
  if (message.content.startsWith(bot.prefix)) {
      const command = message.content.slice(bot.prefix.length).split(" ")[0];
      console.log(command)
      const args = message.content.slice(command.length+bot.prefix.length+1);
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
        else if (command === "literalmente"){
          if(args === "aso"){
            const request = await axios.get(literalmenteAso[Math.floor(Math.random()*literalmenteAso.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "zerhin"){
            const request = await axios.get(literalmenteZerhin[Math.floor(Math.random()*literalmenteZerhin.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "hola"){
            const request = await axios.get(literalmenteHola[Math.floor(Math.random()*literalmenteHola.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "venom"){
            const request = await axios.get(literalmenteVenom[Math.floor(Math.random()*literalmenteVenom.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "meiggs"){
            const request = await axios.get(literalmenteMeiggs[Math.floor(Math.random()*literalmenteMeiggs.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "gor"){
            const request = await axios.get(literalmenteGor[Math.floor(Math.random()*literalmenteGor.length)]);
            const imagenRandom = await request.data.file_url
            if(imagenRandom === undefined){
              literalCagada()
            }
            else{
              message.channel.send(imagenRandom)
            }
          }
          else if(args === "loops"){
              const request = await axios.get(literalmenteLoops[Math.floor(Math.random()*literalmenteLoops.length)]);
              const imagenRandom = await request.data.file_url
              if(imagenRandom === undefined){
                literalCagada()
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
              literalCagada()
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
            literalCagada()
          }
          else{
            const imagenRandom = await request.data.file_url    
            message.channel.send(imagenRandom)
         }
      }
      else{
        message.channel.send("ESE GILIPOLLAS NO XD")
      }
        }
        else if (command === "tweet"){
          const tweetPuesto = args
          message.channel.send(`HUMILLANDO FEMINAZIS...`)
          twitterClient.post('https://api.twitter.com/1.1/statuses/update.json', {status: tweetPuesto},  function(error, tweet, response) {
            if(error) message.channel.send("DEJA DE JODER MIERDA!!!!!!!!!!!");
            else{
            const id = tweet.id_str;
            message.channel.send(`LISTO YA LAS ULTRAJE, ACA ESTA EL LINK: https://twitter.com/Asoplatanazo/status/${id}`)
            }
          });
      }
        else if (command === "insultar"){
          if(message.mentions.members.size > 0){
            const desgraciado = args
            const unomismo = `<@!${message.author.id}>`
            if(desgraciado === bot.tag){
              message.channel.send("no molestes");
            }
            else if(desgraciado === unomismo){
              message.channel.send(`no tio, no te tienes que hacer esto de verdad eres la polla con beceboya xD`)
            }
            else{
              message.channel.send(`${desgraciado} ${insultos[Math.floor(Math.random()*insultos.length)]}`);
          }}
          else{
            message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`);
          }
        }

        else if (command === "MATAR"){
          if(message.mentions.members.size > 0){
          const desgraciado = args
          const unomismo = `<@!${message.author.id}>`
          const causaDeMuerte = "??????????NOSE"
          if(desgraciado === bot.tag){
            message.channel.send(`VALE TIO COMO TU DIGAS.`);
            await sleep(40000);
            message.channel.send(`${message.author} HA SIDO DESPEDAZADO BRUTALMENTE...`);
          }
          else if(desgraciado === unomismo){
            message.channel.send(`no tio, no te tienes que hacer esto de verdad eres la polla con beceboya xD`)
          }
          else{
            message.channel.send(`VALE TIO COMO TU DIGAS.`);
            await sleep(40000);
            message.channel.send(`${desgraciado} HA SIDO ${causaDeMuerte}`);
        }}
        else{
          message.channel.send(`${message.author} <<<<<<<<<<<<<<< PUTO IMBECIL XD`);
        }
      }
        else if (command === "invitarmierda"){
          message.channel.send("LINK DE INVITACION CARAJO https://discord.com/api/oauth2/authorize?client_id=947306117527142410&permissions=8&scope=bot")
        }
        else if(command === "ayudamierda"){
          message.channel.send(`COMANDOS DISPONIBLES:
PREFIJO: ${bot.prefix} (COMO GURA)
ayudamierda: MUESTRA ESTA PORQUERIA.
ASOPLATA: EXPRESA LA SED DE SANGRE DE ASOPLATA POR MATAR AL DESGRACIADO.
doxxear (IP): RECIBE COMO ARGUMENTO UNA IP Y HACE ALGO CHISTOSO.
quote: FRASE RANDOM DE UN LIBRO DE UNA METICULOSA SELECCION REALIZADA POR EL INTELECTUAL EQUIPO DE DESARROLLO DETRÁS DE ESTE PROGRAMA.
dolar: MUESTRA EL PRECIO DEL DOLAR HOY EN ARGENTINA.
literalmente (miembro): LITERALMENTE.
tweet (tweet): SE EXPLICA SOLO.
insultar (@usuario): LO HUMILLO.
MATAR (CAUSA DE MUERTE): LO ANOTO EN MI LIBRETA DE MUERTE POR GILIPOLLAS.
invitarmierda: INVITACION MIERDA`)
        }
        else {
          message.channel.send("?????????????????????????? OK GILIPOLLAS XD")
      }
  }
})


client.login(process.env.TOKEN);


