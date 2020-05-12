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

  const result = []

  for (const key in data) {
    if (data[key].length > 1) {
      result.push(data[key])
    }
  }

  console.log(result)
})
