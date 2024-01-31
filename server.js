const express = require('express')
//import data
const fruits = require('./fruits')
// set port
const PORT = process.env.PORT || 3000

// create instance of express app
const app = express()

// define routes and middleware

app.get('/ping', (req, res) => {
  res.json('Pong')
})

app.get('/greet/:name', (req, res) => {
  res.json(`why hello there ${req.params.name}!`)
})

app.get('/five', (req, res) => {
  const arr = [1, 2, 3, 4, 5]

  res.json(`${arr}!`)
})
app.get('/evens/:n', (req, res) => {
  let evenArr = []
  const start = 2
  const n = parseInt(req.params.n)
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i = i + 2) {
      evenArr.push(i)
    }
  }
  res.json(evenArr)
})

app.get('/namelength/:name', (req, res) => {
  const len = req.params.name
  res.json(`The name length of the name is ${len.length}!`)
})

app.listen(PORT, () => {
  console.log(`serving up delicious fruits on ${PORT}`)
})
