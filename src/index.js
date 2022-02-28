const DiscordJS = require("discord.js")
require("dotenv").config()


const client = new DiscordJS.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on('ready', () => {
  console.log("HOLA CABRONES XD HIJOS DE SUS PUTAS MADRES")
})

client.on('messageCreate', (message) => {
  if (message.content === "ASOPLATA"){
    message.reply({
      content: "HOLA CABRONES XD HIJOS DE SUS PUTAS MADRES AQUI EN UN NUEVO VIDEO"
    })
    message.react('🏳️‍⚧️')
  }
})

client.login(process.env.TOKEN)
