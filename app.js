const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 
const partnersRoute = require('./routes/partnersRoute')
const blogRoute = require('./routes/blogRoute')

const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.json()) 
app.use(cors());
dbConnect()

app.use(blogRoute)
app.use(partnersRoute)


app.get('/', (req, res) => {    
    res.send('hello, welcome to my server')
})

app.listen(PORT, () => {
    console.log("server running on PORT", PORT)
})

module.exports = app;
