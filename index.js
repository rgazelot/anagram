const fs = require('fs')

fs.readFile('words.txt', 'utf8', (err, words) => {
  if (err) {
    return console.log(err)
  }

  const array = words.split('\r\n')
  const data = []

  array.forEach(word => {
  	let key = 0
    for (let i = 0; i < word.length; i++) {
      key += word.charCodeAt(i)
    }

    if (undefined === data[key]) {
    	data[key] = [word]
    } else {
    	data[key].push(word)
    }
  })

  const result = data.filter(Boolean)
  console.log(result)
})
