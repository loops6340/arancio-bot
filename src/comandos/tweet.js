const Twitter = require('twitter')

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

class Tweet {

    name = "tweet"

    run(message, args) {

        const tweetPuesto = args
        message.channel.send(`HUMILLANDO FEMINAZIS...`)
        twitterClient.post('https://api.twitter.com/1.1/statuses/update.json', {status: tweetPuesto},  (error, tweet, response)  => {
          if(error) return message.channel.send("DEJA DE JODER MIERDA!!!!!!!!!!!");
          const id = tweet.id_str;
          message.channel.send(`LISTO YA LAS ULTRAJE, ACA ESTA EL LINK: https://twitter.com/Asoplatanazo/status/${id}`)
        });
    }
}

module.exports = Tweet