const axios = require('axios')

class Dolar {

    name = "dolar"

    async run(message) {
        const request = await axios.get(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`);
        const dataDolar = await request.data[1].casa;
        const dolarCompra = await dataDolar.compra;
        const dolarVenta = await dataDolar.venta;
        message.channel.send(`PRECIO DEL DOLAR HOY
COMPRA: ${dolarCompra} PESOS
VENTA: ${dolarVenta} PESOS
GRAN PAIS XD`)
    }
}

module.exports = Dolar