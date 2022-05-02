

class Amongus{
    name = "amongus"
    run(message){
        message.guild.members.fetch().then((members) => {
            for (var member of members) {
            if(member[1].presence) if(typeof member[1].presence.activities[0] !== 'undefined') if(member[1].presence.activities[0].name !== "Among Us") message.channel.send(`${member[1].user.username} ESTÁ JUGANDO ${member[1].presence.activities[0].name} EN VEZ DE AMONG US `);
            }
           });
        
    }
}


module.exports = Amongus