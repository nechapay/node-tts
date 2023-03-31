const gtts = require('node-gtts')('de')
const path = require('path')
const filepath = path.join(__dirname, 'out/dich.mp3')

gtts.save(filepath, 'Du hörst dich gern reden.', function () {
  console.log('save done')
})
