const express = require('express')

const router = require('./contactUs')

const app = express()

app.use('/contactUs',router)

module.exports= app



