const twitter = require('twitter')
const fsExtra = require('fs-extra')
require('dotenv').config()

exports.search = () => {
  const client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  const params = {
    q: process.env.Q,
    lang: 'ja',
    locale: 'ja',
    result_type: 'mixed',
    count: 100,
  }

  client.get('search/tweets', params, (err, tweets, res) => {
    const statuses = tweets.statuses
    const targets = []

    for (status of statuses) {
      targets.push(status.user.screen_name)
      console.log('added ' + status.user.screen_name)
    }

    fsExtra.writeJSONSync(__dirname + '/targets.json', targets)
  })
}