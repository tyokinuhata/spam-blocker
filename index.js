const twitter = require('twitter')
const fsExtra = require('fs-extra')
require('dotenv').config()

const search = () => {
  const client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  const params = {
    q: '仮想通貨に関するビックウェーブ',
    lang: 'ja'
  }

  client.get('search/tweets', params, (err, tweets, res) => {
    const statuses = tweets.statuses
    const blocks = []

    for (status of statuses) {
      blocks.push(status.id)
    }

    fsExtra.writeJSONSync(__dirname + '/blocks.json', blocks)
  })
}

search()