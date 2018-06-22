
const express= require('express')

const app = express()

const  router= require('./about')


app.use('/aboutUs',router)

module.exports= app

