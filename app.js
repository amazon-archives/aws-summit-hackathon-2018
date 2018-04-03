'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/hotels', (req, res) => {
  // Get all of hotel information
  res.json(hotels)
})

app.post('/hotel/:hotelId', (req, res) => {
  // Reserve a hotel at the given index

  let ix = getHotelIndex(req.params.hotelId)
  hotels[ix].availability = hotels[ix].availability - 1

  res.status(201).json(hotels)
})

const getHotel = (hotelId) => hotels.find(h => h.id === parseInt(hotelId))
const getHotelIndex = (hotelId) => hotels.findIndex(h => h.id === parseInt(hotelId))

// Mock data for example. Must use real database for production
const hotels = [{
  id: 1,
  name: 'Mars Motel',
  availability: 10
}, {
  id: 2,
  name: 'Space Time International',
  availability: 10
}]

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)

// Export your express server so you can import it in the lambda function.
module.exports = app
