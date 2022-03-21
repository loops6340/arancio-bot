class AyudaMierda {

    name = "ayudamierda"

    constructor({ bot }) {
        this.bot = bot
    }

    run(message) {
        message.channel.send(`COMANDOS DISPONIBLES:
        PREFIJO: ${this.bot.prefix} (COMO GURA)
        ayudamierda: MUESTRA ESTA PORQUERIA.
        ASOPLATA: EXPRESA LA SED DE SANGRE DE ASOPLATA POR MATAR AL DESGRACIADO.
        doxxear (IP): RECIBE COMO ARGUMENTO UNA IP Y HACE ALGO CHISTOSO.
        quote: FRASE RANDOM DE UN LIBRO DE UNA METICULOSA SELECCION REALIZADA POR EL INTELECTUAL EQUIPO DE DESARROLLO DETRÁS DE ESTE PROGRAMA.
        dolar: MUESTRA EL PRECIO DEL DOLAR HOY EN ARGENTINA.
        literalmente (miembro): LITERALMENTE.
        tweet (tweet): SE EXPLICA SOLO.
        insultar (@usuario): LO HUMILLO.
        MATAR (@usuario) (CAUSA DE MUERTE): LO ANOTO EN MI LIBRETA DE MUERTE POR GILIPOLLAS.
        devorar (@usuario): LO DEVORAN LOS CUERVOS.
        verso: verso random de la biblia
        linea: linea chistosa del rol play
        invitarmierda: INVITACION MIERDA`)
    }
}

module.exports = AyudaMierda