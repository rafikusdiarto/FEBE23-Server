const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 
const partnersRoute = require('./routes/partnersRoute')
const blogRoute = require('./routes/blogRoute')
const port = process.env.PORT || 5555

app.use(express.json())
app.use(bodyParser.json()) 
app.use(cors());
dbConnect()

app.use(blogRoute)
app.use(partnersRoute)


app.get('/', (req, res) => {    
    res.send('hello, welcome to my server')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

module.exports = app;
