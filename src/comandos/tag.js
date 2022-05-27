const { db } = require("../db/db.js");
const fetch = require("node-fetch");
const axios = require('axios')

class Tag {
  name = "tag";

  async run(message, args) {
    let argumentos = args.split(" ");
    let argumento = argumentos.shift()
    let nombre = argumentos.shift();
    let contenido = argumentos.join(' ');
    let ownerId = message.author.id;
    let tagOwnerId
    let tag = []

    try {
        tag = await db.models.Tag.findAll({
            where: {
                name: argumento
            }
        })
        } catch(e){
            return
        }

    if(tag.length !== 0){
        if(argumento === tag[0].dataValues.name){
            message.channel.send(tag[0].dataValues.content)
        }
    } 


    else if (argumento === "create" && nombre !== 'create') {
    
      try {
        const newTag = await db.models.Tag.create({
          name: nombre,
          content: contenido,
          owner: ownerId,
        });
        message.channel.send(`creado el tag ${newTag.dataValues.name}`)
      } catch (e) {
        if(tag.length !== 0){
        try {
        tagOwnerId = await db.models.Tag.findAll({
            where: {
                name: nombre
            }
        })
        } catch(e){
            console.log(e)
        }
        try{
          const tagOwner = await axios.get(
            `https://discord.com/api/v9/users/${tagOwnerId[0].dataValues.owner}`,
            {
              headers: {
                'Authorization': `Bot ${process.env.TOKEN}`,
              },
            }
          );
          console.log(tagOwner)
          message.channel.send(
            `El tag ${nombre} ya existe y lo tiene ${tagOwner.data.username}#${tagOwner.data.discriminator}`
          );
          
        } catch (e) {
          console.log(e);
        }
    }
    else message.channel.send("error")
      }
    } else message.channel.send("maricon pon un argumento valido");
  }
}

module.exports = Tag;
