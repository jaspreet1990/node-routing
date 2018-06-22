const express = require('express');


const app = express();

const router =require('./v1')


 app.use('/v1', router);


module.exports=app