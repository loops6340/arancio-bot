const { db } = require("../db/db.js");
const axios = require("axios");
const { MessageEmbed } = require('discord.js');

class Tag {
  name = "tag";

  async run(message, args) {
    let argumentos = args.split(" ");
    let argumento = argumentos.shift();
    let nombre = argumentos.shift();
    let contenido = argumentos.join(" ");
    let ownerId = message.author.id;
    let tagOwnerId;
    let tag = [];

    try {
      tag = await db.models.Tag.findAll({
        where: {
          name: argumento,
        },
      });
    } catch (e) {
      return;
    }

    if (tag.length !== 0) {
      if (argumento === tag[0].dataValues.name) {
        message.channel.send(tag[0].dataValues.content);
      }
    } else if (argumento === "create") {
      if (nombre === "create" || nombre === "edit" || nombre === "delete")
        return message.channel.send("NO LE PODES PONER ASI.");
      if (contenido === "") return message.channel.send("PONELE ALGO PELOTUDO");

      try {
        const newTag = await db.models.Tag.create({
          name: nombre,
          content: contenido,
          owner: ownerId,
        });
        message.channel.send(`creado el tag ${newTag.dataValues.name}`);
      } catch (e) {
        try {
          tagOwnerId = await db.models.Tag.findAll({
            where: {
              name: nombre,
            },
          });
        } catch (e) {
          console.log(e);
        }
        try {
          const tagOwner = await axios.get(
            `https://discord.com/api/v9/users/${tagOwnerId[0].dataValues.owner}`,
            {
              headers: {
                Authorization: `Bot ${process.env.TOKEN}`,
              },
            }
          );
          message.channel.send(
            `El tag ${nombre} ya existe y lo tiene ${tagOwner.data.username}#${tagOwner.data.discriminator}`
          );
        } catch (e) {
          console.log(e);
        }
      }
    } else if (argumento === "edit") {
      if(nombre === '') return message.channel.send('???????????')
      if(typeof contenido === 'undefined' || contenido === '') return message.channel.send('ME QUERES ROMPER EL BOT PAJERO')
      let ownedTag = await db.models.Tag.update(
        { content: contenido },
        {
          where: {
            name: nombre,
            owner: ownerId,
          },
        }
      );

      console.log(ownedTag)

      if (!ownedTag[0])
        return message.channel.send(
          "El tag " + nombre + " no es tuyo o no existe."
        );
      else return message.channel.send(`Tag ${nombre} editado.`);
    } else if (argumento === "delete") {
      if(typeof nombre === 'undefined') return message.channel.send('???????????')
      let ownedTag = await db.models.Tag.destroy({
        where: {
          name: nombre,
          owner: ownerId,
        },
      });

      if (!ownedTag)
        return message.channel.send(
          "El tag " + nombre + " no es tuyo o no existe."
        );
      else return message.channel.send(`Tag ${nombre} eliminado.`);
    }
    else if (argumento === 'list'){

      let query = ownerId

      const mentionRegExp = /<@!*&*[0-9]+>/
      const idRegExp = /^[0-9]*$/
      if(mentionRegExp.test(nombre)) query = nombre.slice(2, -1)
      if(idRegExp.test(nombre)) query = nombre

      try{

        const tagOwner = await axios.get(
          `https://discord.com/api/v9/users/${query}`,
          {
            headers: {
              Authorization: `Bot ${process.env.TOKEN}`,
            },
          }
        );

        let tagListResponse = await db.models.Tag.findAll({
          where: {
            owner: query,
          },
        });

        let tagsString = ""

        tagListResponse.forEach(t =>{
          tagsString += t.dataValues.name + '\n'
        })

        if(tagsString === "") return message.channel.send(`${tagOwner.data.username} no tiene tags`)

        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Tags de ${tagOwner.data.username}#${tagOwner.data.discriminator}`)
        .setDescription(tagsString)

        message.channel.send({ embeds: [embed] });

      } catch(e){
        message.channel.send(`ID INVALIDO`);
        console.log(e)
      }

    }
    else if(argumento === 'owner'){

      if(typeof nombre === 'undefined') return message.channel.send('???????????')
      
      let tagSearch = await db.models.Tag.findAll({
        where: {
          name: nombre,
        },
      });

      if(tagSearch.length === 0) return message.channel.send(`El TAG ${nombre} ESTA PUTAS DISPONIBLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)

      let tagOwnerId = tagSearch[0].dataValues.owner

      const tagOwner = await axios.get(
        `https://discord.com/api/v9/users/${tagOwnerId}`,
        {
          headers: {
            Authorization: `Bot ${process.env.TOKEN}`,
          },
        }

      );

      return message.channel.send(`El tag ${nombre} existe y lo tiene el puto desgraciado de ${tagOwner.data.username}#${tagOwner.data.discriminator}`);


    } else message.channel.send(`el tag ${argumento} no fucking existe.`);
  }
}

module.exports = Tag;
