const mongoose = require('mongoose')
require("dotenv").config(); 

const connection = {}

async function dbConnect() {
    console.log("connecting...")
    const db = await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    connection.isConnected = db.connection.readyState
    console.log("db connect")
}


module.exports = {
    dbConnect
}