'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()
const _ = require('lodash')

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/reservations', (req, res) => {
    res.json(getReservations)
})

app.get('/hotels', (req, res) => {
    // Get all of hotel information
    return res.json(getHotels)
})

app.get('/hotels/:hotelId', (req, res) => {
    const hotel = getHotel(req.params.hotelId)

    res.json(hotel)
})
app.post('/hotel/:hotelId', (req, res) => {
    // Reserve a hotel at the given index

    const hotel = getHotel(req.params.hotelId)
    const startDate = req.params.startDate
    const endDate = req.params.endDate

    res.status(201).json(hotel)
})

const getHotel = (hotelId) => hotels.find(h => h.id === parseInt(hotelId))
const getHotels = () => ({
    data: hotels
})
const getReservations = () => ({
    data: reservations
})

// Mock data for example. Must use real database for production
const hotels = [{
    id: 1,
    name: 'Mars Motel',
    reservations: {
        "2018-01-01": {total: 9, used: 8, booked: true},
        "2018-01-02": {total: 9, used: 8, booked: true},
        "2018-01-03": {total: 4, used: 3, booked: false},
    }
}, {
    id: 2,
    name: 'Space Time International',
    reservations: {
        "2018-01-01": {total: 9, used: 8, booked: true},
        "2018-01-02": {total: 1, used: 1, booked: true},
        "2018-01-03": {total: 4, used: 3, booked: false},
    }
}]

const reservations = [
    {
        "name": "Hotel A",
        "id": 1,
        "reservation": {
            "startDate": "2018-01-01",
            "endDate": "2018-01-07"
        }
    }
]

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)

// Export your express server so you can import it in the lambda function.
module.exports = app
