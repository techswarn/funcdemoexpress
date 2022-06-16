const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const port = process.env.PORT

console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})