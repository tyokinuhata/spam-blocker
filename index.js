const twitter = require('twitter')
require('dotenv').config()

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

const blocks = []

client.get('search/tweets', params, (err, tweets, res) => {
  const statuses = tweets.statuses

  statuses.forEach((val, i) => {
    blocks.push(val.id)
  })
})