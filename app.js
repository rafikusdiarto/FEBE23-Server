const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 
const allRouter = require('./routes/index')
const port = process.env.PORT || 5555

app.use(express.json())
app.use(bodyParser.json()) 
app.use(cors());
dbConnect()
    
app.use(allRouter)

app.get('/', (req, res) => {    
    res.send('helloo, welcome to my server')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

module.exports = app;
