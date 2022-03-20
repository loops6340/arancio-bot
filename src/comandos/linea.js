const fs = require("fs");


  

class Linea {

    name = "linea"

    run(message) {
        fs.readFile("./src/logs/asd.txt", "utf-8", function(err, data){
            if(err) {
                throw err;
            }
            var lines = data.split('\n');
            
            // choose one of the lines...
            var line = lines[Math.floor(Math.random()*lines.length)]
            message.channel.send(line)
         })
        }
}
module.exports = Linea