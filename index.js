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
    const targets = []

    for (status of statuses) {
      targets.push(status.user.screen_name)
      console.log('add ' + status.user.screen_name)
    }

    fsExtra.writeJSONSync(__dirname + '/targets.json', targets)
  })
}

const block = (i) => {
  const client = new twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  const targets = fsExtra.readJSONSync(__dirname + '/targets.json')

  if (typeof targets[i] === 'undefined') {
    console.log('completed')
    return
  }

  const params = {
    screen_name: targets[i]
  }

  client.post('blocks/create', params, (err, tweets, res) => {
    if (!err) console.log('blocked ' + targets[i])
    else console.log(err.message)
  })
}

search()
let i = 0
setInterval(() => {
  block(i)
  i++
}, 5000)