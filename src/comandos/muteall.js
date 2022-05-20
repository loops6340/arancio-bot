class Muteall{
    name = "muteall"
    run(message){
        if(message.member.voice.channelId){
            let idVc = message.member.voice.channelId
            message.guild.members.fetch().then((members) => {
                for (var member of members) {
                    if(member[1].voice.channelId === idVc){
                        if(!member[1].voice.serverMute) member[1].voice.setMute()
                        else member[1].voice.setMute(false)
                    }
                }
               });
               return message.channel.send("hecho")
        }
        return message.channel.send("pelotudo tenesq estar en un vc")
    }
}


module.exports = Muteall