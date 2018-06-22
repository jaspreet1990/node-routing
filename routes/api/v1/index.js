const express = require('express');


const app = express();

const aboutRouter= require('./about')
 const contactRouter= require('./contact')



app.use('/about',aboutRouter)
 app.use('/contact',contactRouter)




module.exports=app