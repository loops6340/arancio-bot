

class Ddroll{
    name = "ddroll"
    run(message) {
        let total = [];
        for(let i = 0; i < 6; i++){
            for(let i = 0; i < 4; i++){
                total.push(Math.floor(Math.random() * (6) + 1))
            }
            total.splice[total.indexOf(Math.min(...total))]
            message.channel.send(`${total.reduce((a, b) => a + b, 0)}`)
            total = []
        }
    }

}

module.exports = Ddroll