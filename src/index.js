const { Client, Intents, MessageEmbed } = require("discord.js");
const axios = require("axios");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`YA ESTOY LISTO TIO ${client.user.tag}!`);
  client.user.setPresence({
    activities: [{ type: "LISTENING", name: "GRITOS INFERNALES" }],
    status: "active",
  });
});

const prefix = "a!";

client.on("messageCreate", async (message) => {
  /*
    con esta linea no responde a mensajes hechos por bots, porque obviamente ocurriria el eterno
    retorno
    */
  if (message.author.bot) return;

  if (message.content === "loquendo") {
    message.channel.send("hola hijos de puta xD");
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ").slice(1);

  //a!doxxear 0.0.0
  //doxxear 0.0.0

  const command = message.content.slice(prefix.length).split(" ")[0];

  if (command === "doxxear") {
    const [ip] = args;
    const request = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = await request.data;
    const embed = new MessageEmbed()
      .setTitle("DOXXEO")
      .addField("query", data.query)
      .addField("status", data.status)
      .addField("country", data.country)
      .addField(
        "country code",
        data.countryCode
      )
      .addField("region", data.region)
      .addField("region name", data.regionName)
      .addField("city", data.city)
      .addField("zip", data.zip)
      .addField("lat", String(data.lat))
      .addField("lon", String(data.lon))
      .addField("timezone", data.timezone)
      .addField("isp", data.isp)
      .addField("org", data.org)
      .addField("as", data.as)
      .setColor("RANDOM")
      .setImage("https://c.tenor.com/hTyl4Jc4nPwAAAAS/not.gif");
    message.channel.send({ embeds: [embed] });
  }
});

client.login("TOKEN");
