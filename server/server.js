require('dotenv').config()
const express = require('express')
const app = express()

// Controllers
const GeneralController = require('./controllers/GeneralController')

// use the controllers
GeneralController(app)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`running on port:${port}`)
})