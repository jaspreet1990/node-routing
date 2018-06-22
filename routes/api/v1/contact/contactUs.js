const express = require('express')



const app = express()

const router = express.Router()

app.use('/',router)

router.get('/', (req, res) => {
    res.status(200).json({ message: 'contact index!' });


});



module.exports= app


