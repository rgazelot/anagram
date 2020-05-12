const fs = require('fs')

fs.readFile('words.txt', 'utf8', (err, words) => {
  if (err) {
    return console.log(err)
  }

  const array = words.split('\r\n')

  const data = {}

  array.forEach(word => {
    const wordArray = word.split('')
    wordArray.sort()
    const key = wordArray.join('')

    if (undefined === data[key]) {
    	data[key] = [word]
    } else {
    	data[key].push(word)
    }
  })

  console.log(data)
})
