const { joinVoiceChannel, getVoiceConnection, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtubesearchapi = require('youtube-search-api')
const axios = require('axios')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))






class Play{
    name = "amq"
     async run(message, args){

        var query = `
        query{
            Page(page: 1){
              mediaList(userName: "${args}") {
                  media{
                  title{
                    romaji
                  }
                }
              }
            }
          }
        `;

        let anime = ""
        let length = 0

        try{
        const req = await axios.post('https://graphql.anilist.co', {
            query
        })
        anime = req.data.data.Page.mediaList[Math.floor(Math.random()*req.data.data.Page.mediaList.length)].media.title.romaji
    }catch(e){
        console.log(e)
        return message.channel.send('ESE USUARIO NO EXISTE XD')
    }

    console.log(anime)



        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.channel.guild.id,
            adapterCreator: message.channel.guild.voiceAdapterCreator,
        });

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        const videos = await youtubesearchapi.GetListByKeyword(`${anime} opening`)
        const {id} = videos.items[0]
        



        await new Promise((resolve) => { // wait
            ytdl('http://www.youtube.com/watch?v=' + id, {filter: 'audioonly'})
            .pipe(fs.createWriteStream(`${__dirname}/../musica/lol.mp3`))
            .on('close', () => {
              resolve();
            })
          })
          

        const resource = createAudioResource(`${__dirname}/../musica/lol.mp3`)
        connection.subscribe(player)
        player.play(resource)

     }
}


module.exports = Play