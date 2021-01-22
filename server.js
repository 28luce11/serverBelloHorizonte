const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', function (req, res) {
    res.send('Hello home!')
  })

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})