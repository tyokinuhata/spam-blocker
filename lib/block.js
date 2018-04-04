const twitter = require('twitter')
const fsExtra = require('fs-extra')
require('dotenv').config()

exports.block = (i) => {
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
    if (!err) console.log('blocked @' + targets[i])
    else console.log(err.message)
  })
}