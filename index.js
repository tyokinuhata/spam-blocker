const search = require(__dirname + '/lib/search.js')
const block = require(__dirname + '/lib/block.js')

search.search()
let i = 0
setInterval(() => {
  block.block(i)
  i++
}, 5000)