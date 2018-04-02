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
    lang: 'ja',
    locale: 'ja',
    result_type: 'mixed',
    count: 100,
  }

  client.get('search/tweets', params, (err, tweets, res) => {
    const statuses = tweets.statuses
    const target = []

    for (status of statuses) {
      target.push({
        screen_name: status.user.screen_name,
        text: status.text
      })
    }

    fsExtra.writeJSONSync(__dirname + '/target.json', target)
  })
}

const block = () => {
  const client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  const params = {
    screen_name: 'TV4DZUthYruyX7U'
  }

  const target = fsExtra.readJSONSync(__dirname + '/target.json')

  client.post('blocks/create', params, (err, tweets, res) => {
    console.log(res)
  })
}

// search()
block()