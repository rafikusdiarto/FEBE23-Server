const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const PORT = 5555
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 
const partnersRoute = require('./routes/partnersRoute')

app.use(express.json())
app.use(bodyParser.json()) 
app.use(cors());
dbConnect()

app.use(partnersRoute)

app.listen(PORT, () => {
    console.log("server running on PORT", PORT)
})

module.exports = app;
