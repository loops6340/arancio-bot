const { default: axios } = require("axios")
const DiscordJS = require("discord.js")
const { Client, Intents, MessageAttachment, MessageMentions, Guild, GuildMember } = require('discord.js');
require("dotenv").config()
const fs = require('fs')
const path = require('path')
const {db} = require('./db/db.js')


const client = new DiscordJS.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES"    
  ]
})






let bot = {
  client,
  prefix: "a!",
  owners:["878054504510140416", "944015076854235136", "254821213573087232"],
  tag: "<@!947306117527142410>"
}

client.on('ready', () => {
  console.log("HOLA CABRONES XD HIJOS DE SUS PUTAS MADRES")
  db.sync()
  client.user.setActivity('GORE.', { type: 'WATCHING' });
})




const commands = fs.readdirSync(path.join(__dirname, './comandos/'))

client.on('messageCreate', async (message) => {
  function literalCagada(){
    message.channel.send("OK TIO LA CAGUE ESTA VEZ JODER DE VERDAD LO SIENTO");
    message.channel.send("MI FIN");
    message.channel.send("ADIOS");
  }

  const { guild } = message

  if (message.content.startsWith(bot.prefix)) {

      //ACA ESTAN LOS COMANDOS Y EL ARGUMENTO XD :V
      const selfCommandName = message.content.slice(bot.prefix.length).split(" ")[0];
    
      const args = message.content.slice(selfCommandName.length+bot.prefix.length+1);
      
      for (const commandName of commands) {
        console.log(require(`./comandos/${commandName}`))
        const Command = require(`./comandos/${commandName}`)
        const command = new Command({ client, bot })
        if (command.name === selfCommandName) return command.run(message, args)
        //return message.channel.send("ESTE COMANDO NO EXISTE HIJO DE PUTA XD")
      }

  }
})


client.login(process.env.TOKEN);


