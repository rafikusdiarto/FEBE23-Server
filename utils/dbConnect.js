const mongoose = require('mongoose')
require("dotenv").config(); 

const dbConnect = async () => {
    console.log("connecting...")
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("db connect");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }   
 }





module.exports = {
    dbConnect
}