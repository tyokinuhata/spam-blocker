const twitter = require('twitter')

const client = new twitter({
  consumer_key: 'd5en8vWAQoXLiYKQKAlC28HHo',
  consumer_secret: 'KbDywwLGgzWNyJazF3waBiiRq7ovuGyPEUakl1sGrQSFW1bx1k',
  access_token_key: '3097855788-SJ9jZ1DnVujdrG97JX1PygzOZdRmKmvx4c5XNCn',
  access_token_secret: 'dTfNCFJO80yyNDtSBMeg1ifiS90eRh3jBBJuLejcV6kg2'
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