const { joinVoiceChannel, getVoiceConnection, createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');





class Play{
    name = "play"
     run(message){
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

        const resource = createAudioResource(`${__dirname}/../musica/Dragon Ball AF Dies Irae.mp3`)
        connection.subscribe(player)
        console.log(`${__dirname}/../musica/Dragon Ball AF Dies Irae.mp3`)
        player.play(resource)

        console.log()

     }
}


module.exports = Play