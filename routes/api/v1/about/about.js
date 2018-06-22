const express = require('express');


const app = express();


// var rou= express.Router()


 //app.use('/about',rou);


 app.get('/', (req, res) => {
    res.status(200).json({ message: 'router index!' });


});

module.exports=app